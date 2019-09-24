# React

## 自定义配置(不eject)

::: tip
使用 [Create React App](https://create-react-app.dev/) 创建的应用
:::

1. [react-app-rewired](https://github.com/timarney/react-app-rewired/blob/master/README_zh.md),[customize-cra](https://github.com/arackaf/customize-cra)

::: tip
使用 react-app-rewired 对 create-react-app 的默认配置进行自定义
:::

```sh
  yarn add react-app-rewired customize-cra
```

```json
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

在项目根目录创建一个 config-overrides.js 用于修改默认配置。

```js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

2.babel-plugin-import

::: tip
[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一个用于按需加载组件代码和样式的 babel 插件
:::

```sh
yarn add babel-plugin-import
```

```js
// config-overrides.js   按需加载 antd
const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
```

3.[Antd](https://ant.design/docs/react/use-with-create-react-app-cn)自定义主题
::: tip
自定义主题需要用到 less 变量覆盖功能。我们可以引入 customize-cra 中提供的 less 相关的函数 addLessLoader 来帮助加载 less 样式
:::

```sh
yarn add less less-loader
```

```js
// config-overrides.js
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
```

4.[Proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development)

```json

//package.json中加入
  "proxy": {
    "/api": {
      "target": "http://localhost:8080",
      "changeOrigin":true
    },
  }
```

5.[TypeScript React App](https://create-react-app.dev/docs/adding-typescript)

```sh
npx create-react-app my-app --typescript
# or
yarn create react-app my-app --typescript
```

## 服务端渲染(SSR)

1.[Next.js](https://nextjs.org/)

使用create-next-app快速创建Next.js项目

```sh
npm install -g create-next-app

create-next-app my-app
```
