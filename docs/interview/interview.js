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

const bar = function () {
  console.log(this.name, arguments);
};

bar.prototype.name = 'bar';

const foo = {
  name: 'foo'
};

const bound = bar.mybind(foo, 22, 33, 44);
new bound(); // bar, [22, 33, 44]
bound(); // foo, [22, 33, 44]

// call 实现 
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

// apply 实现
Function.prototype.myapply = function (thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError("Call must be called on a function");
  }
  const args = arguments[1];
  const fn = Symbol('fn');
  thisArg[fn] = this;

  const result = thisArg[fn](...args)
  delete thisArg[fn];
  return result;
}


bar.mycall(foo, 1, 2, 3); // foo [1, 2, 3]
bar.myapply(foo, [1, 2, 3]); // foo [1, 2, 3]

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

const rReduce = ['1', null, undefined, , 3, 4].reduce((a, b) => a + b, 3);
const mReduce = ['1', null, undefined, , 3, 4].myreduce((a, b) => a + b, 3);

console.log(rReduce, mReduce);
// 31nullundefined34 31nullundefined34


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