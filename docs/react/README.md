# React

## [精选组件](https://ant.design/docs/react/recommendation-cn)

::: tip
避免重复造轮子
:::

| 类型         |                                                   组件                                                   |
| ------------ | :------------------------------------------------------------------------------------------------------: |
| 代码高亮     |          [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter)           |
| 富文本编辑器 |     [react-quill](https://github.com/zenoamaro/react-quill),[Braft Editor](https://braft.margox.cn/)     |
| 代码分割     | [loadable-components](https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/) |

## ReactApp Eslint

> https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app

```sh
npm install --save-dev eslint-config-react-app eslint
yarn add -D eslint-config-react-app eslint
pnpm add -D eslint-config-react-app eslint
```

### `.eslintrc.json`

```json
{
  "extends": "react-app"
}
```

## CRA自定义配置([craco](https://github.com/gsoft-inc/craco))

- 安装依赖

```sh
yarn add @craco/craco
```

- 修改 `package.json` 里的 `scripts` 属性

```json
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

- [配置](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-overview

在项目根目录创建一个 craco.config.js 用于修改默认配置

```
/* craco.config.js */
module.exports = {
  // ...
};
```


## 自定义配置(不 eject) react-app-rewired+customize-cra

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

使用 create-next-app 快速创建 Next.js 项目

```sh
npm install -g create-next-app

create-next-app my-app
```

## [Prism](https://prismjs.com/index.html)高亮代码

1.安装 Prism

```sh
yarn add prismjs
yarn add --dev babel-plugin-prismjs
```

2.配置

```js
// config-overrides.js
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  useBabelRc() // 启用.babelrc
);
```

创建或修改.babelrc,添加 babel-plugin-prismjs

```json
{
  "presets": ["babel-preset-react-app"],
  "plugins": [
    [
      "prismjs",
      {
        "languages": ["javascript", "css", "html"],
        "plugins": ["line-numbers", "show-language"],
        "theme": "tomorrow", //node_modules/prismjs/themes/prism-*.css
        "css": true
      }
    ]
  ]
}
```

3.实例

```js
import React, { useState, useEffect } from "react";
import Prism from "prismjs";

function App() {
  const [code] = useState(
    `const bar=1
    const foo='123`
  );
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, [code]);
  return (
    <>
      <pre className="line-numbers">
        <code className="language-js">{code}</code>
      </pre>
    </>
  );
}

export default App;
```

## React.lazy 和 Suspense 实现动态引入和代码分割

```js
import React, { Suspense } from "react";
const OtherComponent = React.lazy(() => import("./OtherComponent"));
const AnotherComponent = React.lazy(() => import("./AnotherComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}
```

## TIPS

### React 引入静态文件

- import

```jsx
import img from '/img/img.png';
...
<img src={img}  />
```

- require

```jsx
<video width="320" height="240" loop muted data-autoplay autoPlay>
  <source src={require('movie.mp4')} type="video/mp4">
  <source src={require('movie.webm')} type="video/webm" />
您的浏览器不支持Video标签。
</video>
```

## Mobx(ts+hooks)

计数器实例

1. 安装依赖

```sh
yarn add mobx mobx-react
```

2. store

```ts
// index.ts
import { createContext, useContext } from 'react'
import CountStore from './CountStore'

const store = {
  countStore: new CountStore()
}

const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);
```

```ts
// CountStore.ts
import { observable, action, computed } from 'mobx';

export default class CountStore {

  @observable
  count: number = 0;

  @action.bound
  increase() {
    this.count++;
  }
  @action.bound
  decrease() {
    this.count--;
  }

  @computed get doubleCount() {
    return this.count * 2;
  }
} 
```

3. Counter

```tsx
//Counter.tsx
import React from "react";
import { useStore } from "./store";
import { observer } from "mobx-react";

function Counter() {
  const {
    countStore: { count, increase, decrease, doubleCount },
  } = useStore();
  return (
    <>
      <div>count:{count}</div>
      <div>doubleCount:{doubleCount}</div>
      <button onClick={ increase}>increase</button>
      <button onClick={ decrease}>decrease</button>
    </>
  );
}

export default observer(Counter);
```