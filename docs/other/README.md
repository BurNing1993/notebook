# Other

## 代码规范

### EditorConfig

> <https://editorconfig.org/>

- .editorconfig

```sh
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

### Prettier

> <https://prettier.io/>

- install

```sh
npm i prettier -D
```

```sh
yarn add -D prettier
```

- [配置 .prettierrc](https://prettier.io/docs/en/options.html)

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false
}
```

- 格式化

```sh
# 格式化所有文件（. 表示所有文件）
npx prettier --write .
```

### ESLint

- install

```sh
npm i eslint -D # npm
yarn add -D eslint # yarn1
```

- 配置

```sh
npx eslint --init
```

执行命令,生成配置

### Prettier 和 ESLint 的冲突

- install

```sh
npm i eslint-plugin-prettier eslint-config-prettier -D # npm
yarn add -D  eslint-plugin-prettier eslint-config-prettier # yarn1
```

- 配置

```js
// .eslintrc.js
module.exports = {
  ...
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  ...
}
```

> Prettier 配置规则 > ESLint 配置规则

执行 eslint --fix 命令时，ESLint 就会按照 Prettier 的配置规则来格式化代码

### husky & lint-staged

> [husky](https://typicode.github.io/husky/#/?id=usage) —— Git Hook 工具，可以设置在 git 各个阶段（pre-commit、commit-msg、pre-push 等）触发我们的命令。
> [lint-staged](https://github.com/okonet/lint-staged) —— 在 git 暂存的文件上运行 linters。

#### husky 自动配置

- 初始化

```sh
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
```

- 配置,修改 .husky/pre-commit

```bash
# .husky/pre-commit
eslint --fix ./src --ext .vue,.js,.ts
```

### lint-staged

- 安装

```sh
npm i lint-staged -D #npm
yarn add lint-staged -D #yarn1
```

- 配置

```json
// package.json 增加
"lint-staged": {
  "*.{vue,js,ts}": "eslint --fix"
},
```

- 配置 husky

```bash
# 修改 .husky/pre-commit
npx lint-staged
```

## Git 提交规范

### Angular commit message 格式规范

> [Angular 项目提交信息格式](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

commit message 由 Header、Body、Footer 组成。

```txt
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- Header 部分包括三个字段 type（必需）、scope（可选）和 subject（必需）。

```sh
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: |common|core|forms|router|service-worker|changelog|docs|
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

- body 是对本次 commit 的详细描述，可以分成多行。（body 可省略）跟 subject 类似，用动词开头，body 应该说明修改的原因和更改前后的行为对比。

- footer 是可选的.

### [Commitizen](https://github.com/commitizen/cz-cli)

> Commitizen 是一个帮助撰写规范 commit message 的工具。它有一个命令行工具 cz-cli。

- 安装

```sh
npm install commitizen -D
yarn add -D commitizen
```

- 初始化

```sh
npx commitizen init cz-conventional-changelog --save-dev --save-exact
npx commitizen init cz-conventional-changelog --yarn --dev --exact
```

- 使用 Commitizen

```sh
git cz
```

- cz-customizable 自定义配置提交说明

```sh
npx commitizen init cz-customizable --save-dev --save-exact --force
```

### 集成 commitlint 验证提交规范

- 安装

```sh
npm i @commitlint/config-conventional @commitlint/cli -D
yarn add -D  @commitlint/config-conventional @commitlint/cli
```

- 配置 commitlint.config.js

```sh
module.exports = { extends: ['@commitlint/config-conventional'] }

```

- 使用 husky 的 commit-msg hook 触发验证提交信息的命令

```sh
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

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
function setMagicNumber(x) {}
```

## ESLINT 配置

### React hooks ESlint

- 安装

```sh
npm install eslint-plugin-react-hooks --save-dev
yarn add -D eslint-plugin-react-hooks
```

- 配置

```js
// 你的 ESLint 配置
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}
```

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

4) docker rmi imageID 删除镜像

```sh
docker rmi -f $(docker images -qa) # 删除全部镜像
```

### Dockerfile

Dockerfile 是用来构建 Docker 镜像的构建文件，是由一系列命令和参数构成的脚本。

#### 构建步骤

- 编写 Dockerfile 文件
- docker build [-f DockerfilePath] -t imageName:tag .

#### 关键字

- FROM 基础镜像，当前新镜像是基于哪个镜像的
- MAINTAINER 镜像维护者的姓名和邮箱地址
- RUN 容器构建时需要运行的命令
- EXPOSE 当前容器对外暴露出的端口
- WORKDIR 指定在创建容器后，终端默认登陆的进来工作目录，一个落脚点
- ENV 用来在构建镜像过程中设置环境变量
- ADD 将宿主机目录下的文件拷贝进镜像且 ADD 命令会自动处理 URL 和解压 tar 压缩包
- COPY 将从构建上下文目录中 <源路径> 的文件/目录复制到新的一层的镜像内的 <目标路径> 位置
- VOLUME 容器数据卷，用于数据保存和持久化工作
- CMD 指定一个容器启动时要运行的命令 Dockerfile 中可以有多个 CMD 指令，但只有最后一个生效，CMD 会被 docker run 之后的参数替换
- ENTRYPOINT​ 指定一个容器启动时要运行的命令 ENTRYPOINT 的目的和 CMD 一样，都是在指定容器启动程序及参数
- ONBUILD 当构建一个被继承的 Dockerfile 时运行命令，父镜像在被子继承后父镜像的 onbuild 被触发

### 网络

#### [Docker 容器互访](https://www.cnblogs.com/shenh/p/9714547.html)

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
      - name: Node
        uses: actions/setup-node@v2
        with:
          node-version: "16"
          cache: "npm" # yarn
      - name: Install dependencies and build
        run: |
          npm install 
          npm run build
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
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target: "http://example.com/",
    changeOrigin: true
    // pathRewrite: {
    //   // 通过路径重写，去除请求路径中的 `/backend`
    //   // 例如 /backend/user/login 将被转发到 http://backend-api.com/user/login
    //   '^/api/': '/'
    // }
  })(req, res);
};
```
