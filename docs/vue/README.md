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
只有以 VUE_APP_ 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中。
如VUE_APP_SECRET='SECRET'

重启后生效!!!
:::

* 通过传递 --mode 选项参数为命令行覆写默认的模式.

```json
"dev-build": "vue-cli-service build --mode development",
```
