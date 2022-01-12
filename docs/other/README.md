# Other

## VSCode

### [JSDoc](https://jsdoc.app/index.html)

```js
//@ts-check

/** @type {import('playwright').Page} */
let page;
```

- [@type](https://jsdoc.app/tags-type.html)

```js
/** @type {(string|Array.)} */
var foo;
/** @const {number} */
var FOO = 1;
```

- [@typedef](https://jsdoc.app/tags-typedef.html)

```js
/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Set the magic number.
 * @param {NumberLike} x - The magic number.
 */
function setMagicNumber(x) {
}
```

## ESLINT 配置

```js
//.eslintrc.js
rules:{
  semi: ['error', 'always'], //分号
  'comma-dangle': ['error', 'always-multiline'], //逗号(仅多行)
  'space-before-function-paren': ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }], //方法前空格
}
```

## 发布 NPM 包

### 登录

```sh
npm login
```

- 查看账号

```sh
npm whoami
```

- 版本管理

```sh
npm version patch # 升级修订版本号
npm version minor # 升级次版本号
npm version major # 升级主版本号
```

## Nginx

1. 静态资源代理

- 基本配置

```sh
server {
  listen       8888;        #端口
  server_name  localhost;   #服务名
  root  html;               #显示的根索引目录
  autoindex on;             #开启索引功能
  autoindex_exact_size off; #关闭计算文件确切大小（单位bytes），只显示大概大小（单位kb、mb、gb）
  autoindex_localtime on;   #显示本机时间而非GMT时间
}
docker run \
--rm \
--name static \
-v "$PWD/html":/usr/share/nginx/html \
-v "$PWD/conf":/etc/nginx
-p 8888:80 \
-d \
nginx
```

- 设置密码

::: tip
htpasswd 命令是 Apache 的 Web 服务器内置工具，用于创建和更新储存用户名、域和用户基本认证的密码文件。
:::

htpasswd(选项)(参数)

```sh
-c：创建一个加密文件；
-n：不更新加密文件，只将加密后的用户名密码显示在屏幕上；
-m：默认采用MD5算法对密码进行加密；
-d：采用CRYPT算法对密码进行加密；
-p：不对密码进行进行加密，即明文密码；
-s：采用SHA算法对密码进行加密；
-b：在命令行中一并输入用户名和密码而不是根据提示输入密码；
-D：删除指定的用户。
```

实例

```sh
htpasswd -bc passwd.db admin  123456 #在目录下生成一个passwd.db文件，用户名admin，密码：123456，默认采用MD5加密方式。
htpasswd -b passwd.db  user 123456 #在原有密码文件中增加下一个用户
```

Nginx 配置

```sh
server {
  listen  80;
  server_name  localhost;
  charset utf-8;
  root html;
  location / {
      autoindex on; # 索引
      autoindex_exact_size on; # 显示文件大小
      autoindex_localtime on; # 显示文件时间
      auth_basic "请输入用户名密码";
      auth_basic_user_file /usr/share/nginx/passwd.db;
  }
}
docker run \
--rm \
--name static \
-v "$PWD/html":/usr/share/nginx/html \
-v "$PWD/conf":/etc/nginx \
-v "$PWD/passwd.db":/usr/share/nginx/passwd.db \
-p 8888:80 \
-d \
nginx
```

- 防盗链
  ::: tip
  如果服务器的图片被别的网站盗链，将影响服务器的带宽以及访问速度，这时我们就需要设置图片文件或视频文件的防盗链功能。

防盗链功能，简单来说就是你可以直接访问该资源，但是不能将我的资源链接放到你自己的服务器上让别人访问，尤其是图片或视频这种比较大的文件，容易导致服务器响应很慢。

要实现防盗链，需要了解 HTTP 协议中的请求头部的 Referer 头域和采用 URL 的格式表示访问当前网页或者文件的源地址。通过该头域的值，我们可以检测到访问目标资源的源地址。这样，如果我们检测到 Referer 头域中的值并不是自己站点内的 URL，就采取组织措施，实现防盗链。需要注意是，由于 Referer 头域中的值可以被更改的，因此该方法不能完全阻止所有盗链行为。
:::

```sh
server {
  listen  80;
  server_name  xxx.com;
  charset utf-8;
  root /static;
  #location指令用来映射请求到本地文件系统
  location ~*^.+\.(gif|jpg|png|jpeg)$ {
  expires     30d;
  valid_referers none blocked  xxx.com;
    if ($invalid_referer) {
        #return 403;
      rewrite ^/ http://xxx/403.html;
    }
  }
}
```

::: tip
Nginx 配置中有一个指令 valid_referers，用来获取 Referer 头域中的值，并且根据该值的情况给 Nginx 全局变量$invalid_referer的值，如果Referer头域中没有符合valid_referers指令配置的值，$invalid_referer 变量将会被赋值为 1。
:::

valid_referer 指令的语法结构:

```sh
valid_referers none | blocked | server_names | string ....;
none 检测Referer头域不存在的请求
blocked 检测Referer头域的值被防火墙或者代理服务器删除或伪装的情况。
这种情况下，该头域的值不以“http://”或者“https：//”开头
server_names 设置一个或多个URL,检测Referer头域的值是否是这些URL中的某个。
```

## Docker

> [Docker 绿皮书](http://docs.nigeerhuo.com/docker/)

### 安装

- [centos](https://docs.docker.com/engine/install/centos/)

- [ubuntu](https://docs.docker.com/engine/install/ubuntu/)

### 常用命令

1. docker images 镜像列表

```sh
docker images #镜像列表
-a #列出本地所有的镜像（含中间映像层）
-q #只显示镜像ID。
--digests #显示镜像的摘要信息
--no-trunc # 显示完整的镜像信息
```

2. docker search xx 搜索镜像

```sh
docker search tomcat # 搜索tomcat镜像
----filter stars=num
docker search --filter stars=30 tomcat # 搜索start>30的tomcat镜像
```

3. docker pull image [:TAG]


4. docker rmi  imageID 删除镜像

```sh
docker rmi -f $(docker images -qa) # 删除全部镜像
```

### Dockerfile

Dockerfile是用来构建Docker镜像的构建文件，是由一系列命令和参数构成的脚本。

#### 构建步骤

- 编写Dockerfile文件
- docker build [-f DockerfilePath] -t imageName:tag .

#### 关键字

- FROM  基础镜像，当前新镜像是基于哪个镜像的
- MAINTAINER   镜像维护者的姓名和邮箱地址
- RUN   容器构建时需要运行的命令
- EXPOSE   当前容器对外暴露出的端口
- WORKDIR   指定在创建容器后，终端默认登陆的进来工作目录，一个落脚点
- ENV   用来在构建镜像过程中设置环境变量
- ADD   将宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar压缩包
- COPY   将从构建上下文目录中 <源路径> 的文件/目录复制到新的一层的镜像内的 <目标路径> 位置
- VOLUME   容器数据卷，用于数据保存和持久化工作
- CMD   指定一个容器启动时要运行的命令 Dockerfile 中可以有多个 CMD 指令，但只有最后一个生效，CMD 会被 docker run 之后的参数替换
- ENTRYPOINT​ 指定一个容器启动时要运行的命令 ENTRYPOINT 的目的和CMD一样，都是在指定容器启动程序及参数
- ONBUILD 当构建一个被继承的Dockerfile时运行命令，父镜像在被子继承后父镜像的onbuild被触发

### 网络

#### [Docker容器互访](https://www.cnblogs.com/shenh/p/9714547.html)

## [Github gh-page Action](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

1. react
   ::: tip
   需要生成需要 GitHub 密钥,存储在 Secrets.ACCESS_TOKEN 中
   :::

```yml
# .github/workflows/gh-pages.yml
name: GitHub Page Actions
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout 🛎️
      uses: actions/checkout@v2
    - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
    - uses: actions/setup-node@v2
      with:
        node-version: '16'
        cache: 'npm' # yarn
    - run: npm install # yarn install
    - run: npm run build # yarn build
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@v4
      with:
          branch: gh-pages # The branch the action should deploy to.
          folder: docs/.vuepress/dist # The folder the action should deploy.
```

### Github gh-pages deploy

```sh
yarn add --dev  gh-pages
```

```json
//package.json  homepage
"homepage": "https://xxx.github.io/project_name/",
//  package.json  scripts +
"predeploy": "yarn build",
"deploy": "gh-pages -d build" // build folder
```

```sh
yarn deploy
```

:::tip
build fail 切换下分支再切回去
:::

## Shell

1. 定义变量

```sh
name="Joey"
```

- 命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。

- 中间不能有空格，可以使用下划线（\_）。

- 不能使用标点符号。

- 不能使用 bash 里的关键字（可用 help 命令查看保留关键字）。

2. 使用变量

## 模拟数据

### Mock.js + json-server

:::tip
[Mock.js](http://mockjs.com/)

[json-server](https://github.com/typicode/json-server#getting-started)
:::

## Git 提交日志规范

```html
<type>
  (<scope
    >) :
    <subject
      >//空一行
      <body>
        //空一行
        <footer></footer></body></subject></scope
></type>
```

- type 用于说明 commit 的类型，只允许使用下面 7 个标识

1. feat: 新功能（feature）
2. fix: 修补 Bug
3. docs: 文档 （documention）
4. style: 样式 （不影响代码运行的变动）
5. refactor: 重构 （既不是新增功能，也不是修改 Bug 的代码变动）
6. test: 增加测试
7. chore: 构建过程或辅助工具的变动

- scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等，视项目不同而不同

- subject 是 commit 目的的简短描述，不超过 50 个字符

- body 部分是对本次 commit 的详细描述，可以分成多行

- footer 部分只用于两种情况

1. 不兼容变动时，以 BREAKING CHANGE 开头，后面是对变动的描述以及变动理由和迁移方法
2. 如果当前 commit 针对某个 issue ，那么可以在 footer 部分关闭这个 issue

## [Nginx 缓存配置](https://www.digitalocean.com/community/tools/nginx)

### 启用缓存

```sh
server{
  ...
  # assets
  location ~* \.(?:css(\.map)?|js(\.map)?)$ {
    expires 3h;
    access_log off;
  }

  # media
  location ~* \.(?:jpe?g|png|gif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {
    expires 7d;
    access_log off;
  }

  # svg, fonts
  location ~* \.(?:svgz?|ttf|ttc|otf|eot|woff2?)$ {
    add_header Access-Control-Allow-Origin "*";
    expires 7d;
    access_log off;
  }
}
```

### 禁用缓存

```sh
server{
  ...
  location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|css)$ {
  #禁止缓存，每次都从服务器请求
    add_header Cache-Control no-store;
  }
}
```

## SpringBootApp

```sh
# 打包
cd 项目跟目录（和pom.xml同级）
mvn clean package
## 或者执行下面的命令
## 排除测试代码后进行打包
mvn clean package  -Dmaven.test.skip=true
#  指定端口
java -jar app.jar  --server.port=8000
# 后台运行
nohup java -jar XXX.jar &
#  选择读取不同的配置文件
java -jar app.jar --spring.profiles.active=dev
# 设置 jvm 参数
java -Xms10m -Xmx80m -jar app.jar &
```

## [vercel](https://vercel.com/) proxy

```json
// vercel.json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/proxy"
    }
  ]
}
```

```js
// /api/proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target:'http://example.com/',
    changeOrigin: true,
    // pathRewrite: {
    //   // 通过路径重写，去除请求路径中的 `/backend`
    //   // 例如 /backend/user/login 将被转发到 http://backend-api.com/user/login
    //   '^/api/': '/'
    // }
  })(req, res)
}
```
