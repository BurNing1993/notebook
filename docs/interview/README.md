# 面试

## CSS

### [盒子模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

![盒子模型](https://mdn.mozillademos.org/files/8685/boxmodel-(3).png)

### [BFC(Block Formatting Context,块格式化上下文)](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

:::tip
BFC是Web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域
:::

>下列方式会创建块格式化上下文：

* 根元素(`<html>`)
* 浮动元素（元素的 float 不是 none）
* 绝对定位元素（元素的 position 为 absolute 或 fixed）
* 行内块元素（元素的 display 为 inline-block）
* 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
* 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
* 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
* overflow 值不为 visible 的块元素
* display 值为 flow-root 的元素
* contain 值为 layout、content或 paint 的元素
* 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
* 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
* 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
* column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中。

### [Flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

:::tip
[Flex 实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
[MDN Flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
:::

## js

### bind实现

:::tip
call、apply、bind 本质都是改变 this 的指向，不同点 call、apply 是直接调用函数，bind 是返回一个新的函数。call 跟 apply 就只有参数上不同。
:::

:::tip

* 箭头函数的 this 永远指向它所在的作用域

* 函数作为构造函数用 *new* 关键字调用时，不应该改变其 *this* 指向，因为 *new绑定* 的优先级高于 *显示绑定* 和 *硬绑定*

:::

```js
// bind实现
Function.prototype.mybind = function (thisArg) {
  if (typeof this !== 'function') {
    throw TypeError('Bind must be called on a function')
  }
  // 拿到参数，为了传给调用者
  const args = Array.prototype.slice.call(arguments, 1);
  // 保存 this
  const self = this;
  // 构建一个干净的函数，用于保存原函数的原型
  const nop = function () { };

  const bound = function () {
    // this instanceof nop, 判断是否使用 new 来调用 bound
    // 如果是 new 来调用的话，this的指向就是其实例，
    // 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
    return self.apply(
      this instanceof nop ? this : thisArg,
      args.concat(Array.prototype.slice.call(arguments))
    )
  }
  // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
  if (this.prototype) {
    nop.prototype = this.prototype;
  }
  // 修改绑定函数的原型指向
  bound.prototype = new nop();
  return bound;
}
```

### call 实现

:::tip
bind 是封装了 call 的方法改变了 this 的指向并返回一个新的函数，那么 call 是如何做到改变 this 的指向呢？原理很简单，在方法调用模式下，this 总是指向调用它所在方法的对象，this 的指向与所在方法的调用位置有关，而与方法的声明位置无关（箭头函数特殊）
:::

```js
// call实现
// this指向调用call的对象
Function.prototype.mycall = function (thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError("Call must be called on a function");
  }
  // 声明一个 Symbol 属性，防止 fn 被占用
  const fn = Symbol('fn');
  const args = [...arguments].slice(1)
  thisArg = thisArg || window;
  // 将调用call函数的对象添加到thisArg的属性中
  thisArg[fn] = this;
  // 执行该属性
  const result = thisArg[fn](...args);
  // 删除该属性
  delete thisArg[fn];
  // 返回函数执行结果
  return result;
}
```

### apply实现

```js
// apply 实现
Function.prototype.myapply = function(thisArg){
  if (typeof this !== 'function') {
    throw new TypeError("Call must be called on a function");
  }
  const args = arguments[1];
  const fn = Symbol('fn');
  thisArg[fn]  = this;

  const result = thisArg[fn](...args)
  delete thisArg[fn];
  return result;
}
```

### [reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)实现原理

:::tip
*arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])*
callback参数
  Accumulator (acc) (累计器)
  Current Value (cur) (当前值)
  Current Index (idx) (当前索引)
  Source Array (src) (源数组)
:::

```js
// reduce 实现原理
Array.prototype.myreduce = function (callbackfn) {
  // 拿到数组
  const arr = this;
  len = arr.length;
  // 下表值
  let k = 0;
  // 累加器
  let accumulator;
  // k下表对应的值是否存在
  let kPresent = false;

  let initialValue = arguments.length > 0 ? arguments[1] : undefined;

  if (typeof callbackfn !== 'function') {
    throw new TypeError(callbackfn + ' is not a function!');
  }
  //  数组为空，并且有初始值，报错reducer 函数接收4个参数:
  if (len === 0 && arguments.length < 2) {
    throw new TypeError('Reduce of empty array with no initial value')
  }
  // 如果初始值存在
  if (arguments.length > 1) {
    // 设置累加器未初始值
    accumulator = initialValue;
  } else {
    accumulator = arr[k]
    ++k;
  }
  while (k < len) {
    // 判断是否为 empty [,,,]
    kPresent = arr.hasOwnProperty(k)
    if (kPresent) {
      const kValue = arr[k]
      // 调用callbackfn
      accumulator = callbackfn.apply(undefined, [accumulator, kValue, k, arr]);
    }
    ++k;
  }
  return accumulator;
}
```

### new 实现

```js
/**
 * 模拟实现 new 操作符
 * @param  {Function} ctor [构造函数]
 * @return {Object|Function|Regex|Date|Error}      [返回结果]
 */
function newOperator(ctor){
  if(typeof ctor !== 'function'){
    throw 'newOperator function the first param must be a function';
  }
  // ES6 new.target 是指向构造函数
  newOperator.target = ctor;
  // 1.创建一个全新的对象，
  // 2.并且执行[[Prototype]]链接
  // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
  var newObj = Object.create(ctor.prototype);
  // ES5 arguments转成数组 当然也可以用ES6 [...arguments], Aarry.from(arguments);
  // 除去ctor构造函数的其余参数
  var argsArr = [].slice.call(arguments, 1);
  // 3.生成的新对象会绑定到函数调用的`this`。
  // 获取到ctor函数返回结果
  var ctorReturnResult = ctor.apply(newObj, argsArr);
  // 小结4 中这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
  var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
  var isFunction = typeof ctorReturnResult === 'function';
  if(isObject || isFunction){
      return ctorReturnResult;
  }
  // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
  return newObj;
}
```

### 防抖/节流

```js
// 防抖
function debounce(func, wait) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
// 使用
window.onscroll = debounce(function() {
  console.log('debounce');
}, 1000);
```

```js
function throttle(fn, delay) {
  var prevTime = Date.now();
  return function() {
    var curTime = Date.now();
    if (curTime - prevTime > delay) {
      fn.apply(this, arguments);
      prevTime = curTime;
    }
  };
}
// 使用
var throtteScroll = throttle(function() {
  console.log('throtte');
}, 1000);
window.onscroll = throtteScroll;
```

### 函数柯里化实现

:::tip
它的本质就是将一个参数很多的函数分解成单一参数的多个函数。

用途:

1. 延迟计算 （用闭包把传入参数保存起来，当传入参数的数量足够执行函数时，开始执行函数）
2. 动态创建函数 （参数不够时会返回接受剩下参数的函数）
3. 参数复用（每个参数可以多次复用）
:::

```js
const curry = fn =>
  (judge = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...arg) => judge(...args, ...arg));
```

### 深拷贝

:::tip
浅拷贝只复制地址值，实际上还是指向同一堆内存中的数据，深拷贝则是重新创建了一个相同的数据，二者指向的堆内存的地址值是不同的。这个时候修改赋值前的变量数据不会影响赋值后的变量。
:::

```js
// 判断类型函数
function getType(obj) {
  const str = Object.prototype.toString.call(obj);
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  if (obj instanceof Element) {
    // 判断是否是dom元素，如div等
    return 'element';
  }
  return map[str];
}
// 简单版深拷贝
function deepCopy(ori) {
  const type = getType(ori);
  let copy;
  switch (type) {
    case 'array':
      return copyArray(ori, type, copy);
    case 'object':
      return copyObject(ori, type, copy);
    case 'function':
      return copyFunction(ori, type, copy);
    default:
      return ori;
  }
}

function copyArray(ori, type, copy = []) {
  for (const [index, value] of ori.entries()) {
    copy[index] = deepCopy(value);
  }
  return copy;
}

function copyObject(ori, type, copy = {}) {
  for (const [key, value] of Object.entries(ori)) {
    copy[key] = deepCopy(value);
  }
  return copy;
}

function copyFunction(ori, type, copy = () => {}) {
  const fun = eval(ori.toString());
  fun.prototype = ori.prototype
  return fun
}
```
