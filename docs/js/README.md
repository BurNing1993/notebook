# JavaScript

## [Page Lifecycle API](http://www.ruanyifeng.com/blog/2018/11/page_lifecycle_api.html)

### `beforeunload` 事件

```js
function onBeforeUnload(e) {
  // console.log(e, 'onBeforeunload')
  e.preventDefault();
  e.returnValue = "";
}
window.addEventListener("beforeunload", onBeforeUnload);
// window.removeEventListener('beforeunload',onBeforeUnload)
```

## esm __dirname

```js
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```
