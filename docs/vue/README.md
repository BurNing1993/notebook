# Vue

## [环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)

```sh
.env                # 在所有的环境中被载入
.env.production     # 只在production模式中被载入
```

::: tip
NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。

BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。
:::

::: tip
只有以 VUE*APP* 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中。
如 VUE_APP_SECRET='SECRET'

重启后生效!!!
:::

- 通过传递 --mode 选项参数为命令行覆写默认的模式.

```json
"dev-build": "vue-cli-service build --mode development",
```

## 部署

- 同时部署多个 Vue Web App,在 Home 下部署 Doc

      Home(默认配置):
      router:
        base: process.env.BASE_URL,
        mode: 'history',
      Docs:
        router:
          base: process.env.BASE_URL,
          mode: 'history',
        vue.config.js
          publicPath: '/docs/',
      Nginx:
        server{
          listen       80;
          server_name  localhost;

          root   /usr/share/nginx/html;
          index  index.html index.htm;
          location / {
            try_files $uri $uri/ /index.html;
          }

          location /docs {
              try_files $uri $uri/ /docs/index.html;
          }
          ...
        }

::: tip
<http://localhost> -> home

<http://localhost/docs> -> docs
:::

## Prism 代码高亮

1.配置

```sh
yarn add prismjs
yarn add --dev babel-plugin-prismjs
```

```js
// babel.config.js 添加 babel-plugin-prismjs
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    ["prismjs", {
      "languages": ["javascript", "css", "html"],
      "plugins": ["line-numbers", "show-language"],
      "theme": "tomorrow", //node_modules/prismjs/themes/prism-*.css
      "css": true
    }]
  ]
};
```

2.示例

```html
<template>
  <pre class="line-numbers">
    <code class='language-js'>
      {{code}}
    </code>
  </pre>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'Code',
  data() {
    return {
      code:
    `const bar=1
    const foo='123'`,
    };
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll();
    });
  },
};
</script>
```

## 自定义指令

* darg(拖拽)

```js
Vue.directive('darg', {
  //指令绑定到元素
  bind(el) {
    // el.style.position = "absolute"
    el.onmousedown = function (e) {
      let disX = e.clientX - el.offsetLeft;
      let disY = e.clientY - el.offsetTop;

      document.onmousemove = function (e) {
        el.style.left = e.clientX - disX + "px";
        el.style.top = e.clientY - disY + "px";
      };
      document.onmouseup = function () {
        document.onmousemove = null;
      };
      return false;
    }
  }
});
```

* rotate(旋转)

```js
Vue.directive('rotate', {
  bind(el) {
    el.ondblclick = () => {
      let deg = Number(el.dataset.deg) || 0;
      deg += 90;
      el.dataset.deg = deg
      el.style.transform = `rotate(${deg}deg)`;
    }
  }
});
```
