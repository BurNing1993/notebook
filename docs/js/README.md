# JavaScript

## [Page Lifecycle API](http://www.ruanyifeng.com/blog/2018/11/page_lifecycle_api.html)

### `beforeunload` 事件

```js
function onBeforeUnload(e) {
    // console.log(e, 'onBeforeunload')
    e.preventDefault()
    e.returnValue = '' 
}
window.addEventListener('beforeunload', onBeforeUnload)
// window.removeEventListener('beforeunload',onBeforeUnload)
```
