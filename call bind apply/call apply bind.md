## call apply bind
call和apply都是改变this的执行，并且立即执行函数。区别在于传参方式不一样。
bind也能改变函数题this的指向，但是与apply和call的最大区别是：bind不会立即调用

* func.call(thisArg, arg1, arg2):第一个参数是this指向的对象，其他参数依次传入
* func.apply(thisArg,[argsArray]):第一个参数是this指向的对象，第二个参数是数组或者类数组
* func.bind(thisArg,队列or数组)：第一个参数是this指向的对象，其他参数依次传入

## 实现call函数
用解构实现
```javascript
Function.prototype.caller = function (thisArg, ...args) {
	let context;
	 if(!thisArg) {
        context = typeof window === undefined? global: window;
    } else {
        context = thisArg;
    }
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
}
// 测试
var test={
    value:'value',
}

function bar(name,old) {
    console.log(name)
    console.log(old)
    console.log(this.value)
}
bar.caller(null,'wo','12');
bar.caller('value','wo','12');
```

## 实现apply函数
```javascript
Function.prototype.applyer = function(thisArg,args){
    let context;
    if(!thisArg) {
        context = typeof window === undefined? global: window
    } else {
        context = thisArg
    }
    context.fn = this;
    if(!args){
        context.fn() 
    } else {
        context.fn(...args);
    }
}
// 测试
var test={
    value:'value',
}

function bar(name,old) {
    console.log(name)
    console.log(old)
    console.log(this.value)
}
bar.applyer(null,['wo','12']);
bar.applyer('value',['wo','12']);
```


## 实现bind函数
```javascript
Function.prototype.binder = function(thisArg,...args){
    let that = this;
    return function() {
        this.call(thisArg,...args)
    }
}
```

```javascript
Function.prototype.binder = function(thisArg,...args){
    let that = this;
    return function() {
        that.apply(thisArg,args)
    }
}
```