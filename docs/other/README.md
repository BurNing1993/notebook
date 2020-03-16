# Other

## Nginx

1. 静态资源代理

* 基本配置

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

* 设置密码

::: tip
htpasswd命令是Apache的Web服务器内置工具，用于创建和更新储存用户名、域和用户基本认证的密码文件。
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

Nginx配置

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

* 防盗链
::: tip
如果服务器的图片被别的网站盗链，将影响服务器的带宽以及访问速度，这时我们就需要设置图片文件或视频文件的防盗链功能。

防盗链功能，简单来说就是你可以直接访问该资源，但是不能将我的资源链接放到你自己的服务器上让别人访问，尤其是图片或视频这种比较大的文件，容易导致服务器响应很慢。

要实现防盗链，需要了解HTTP协议中的请求头部的Referer头域和采用URL的格式表示访问当前网页或者文件的源地址。通过该头域的值，我们可以检测到访问目标资源的源地址。这样，如果我们检测到Referer头域中的值并不是自己站点内的URL，就采取组织措施，实现防盗链。需要注意是，由于Referer头域中的值可以被更改的，因此该方法不能完全阻止所有盗链行为。
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
Nginx配置中有一个指令valid_referers，用来获取Referer头域中的值，并且根据该值的情况给Nginx全局变量$invalid_referer的值，如果Referer头域中没有符合valid_referers指令配置的值，$invalid_referer变量将会被赋值为1。
:::

valid_referer指令的语法结构:

```sh
valid_referers none | blocked | server_names | string ....;
none 检测Referer头域不存在的请求
blocked 检测Referer头域的值被防火墙或者代理服务器删除或伪装的情况。
这种情况下，该头域的值不以“http://”或者“https：//”开头
server_names 设置一个或多个URL,检测Referer头域的值是否是这些URL中的某个。
```

## Docker

1. [Docker绿皮书](http://docs.nigeerhuo.com/docker/)

## [Github gh-page Action](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

1. react
::: tip
需要生成需要 GitHub 密钥,存储在Secrets.ACCESS_TOKEN中
:::

```yml
# .github/workflows/gh-pages.yml
name: GitHub gh-page Actions
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: Build and Deploy
      uses: JamesIves/github-pages-deploy-action@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: build
        BUILD_SCRIPT: npm install && npm run build
```

## Git提交日志规范

```html
<type> (<scope>) : <subject>//空一行<body>//空一行<footer>
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