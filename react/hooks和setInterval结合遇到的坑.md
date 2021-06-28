## 背景

在做大禹项目的时候遇到一个需求是进入一个页面要启动一个定时器，感觉这是一个很正常的需求，但是前端项目的技术栈在用了reacthooks+setInterval的结合后，却遇到了一个意向不到的bug

##  Bug示例


如下所示：

```
function Counter() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
 return <h1>{count}</h1>;
}
```

按照我的想法是这个count会在定时器的作用下每秒递增，页面会出现0，1s后会变成1，然后1会变成2就这样循环往下，但是结果往往跟我的想法不一样，页面从0变成1后再也没有变过！！！！

这是因为`Effect`的第二个参数为`[]`，没有依赖,`Effect`只会执行一次。`setInterval`中拿到的是第一次渲染时的闭包`count`，所以`count`永远是`0`,界面会一直显示`1`,执行的效果如下代码所示

```
function Counter() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(0 + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
 return <h1>{count}</h1>;
}
```

如果我们直接往第二个参数加`count`呢

```
function Counter() {
//... 
useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [count]);
//...
}
```

这样效果是对的，但是性能不好。每当`count`更改了，`useEffect`就会渲染一次,定时器也会不停的被新增与移除。如下所示：

```
//第一次
function Counter() {
//... 
useEffect(() => {
    const id = setInterval(() => {
      setCount(0 + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [0]);
//...
}
//第二次
function Counter() {
//... 
useEffect(() => {
    const id = setInterval(() => {
      setCount(1 + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [1]);
//...
//第N次
}
```

那到底要怎么做才能有保障性能，定时器只监听一次，又使定时器起作用呢？

## 解决办法

### 方案一、函数式更新

`useState `中的set方法可接收函数，该函数将接收先前的`state`，并返回一个更新后的值。这样定时器每次拿到的是最新的值。

```
function Counter() {
let [count, setCount] = useState(0);
useEffect(() => {
    const id = setInterval(() => {
      setCount(v => {
        return v + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
return <h1>{count}</h1>;
}
```

### 方案二、用useRef

`useRef`返回一个可变的`ref`对象,返回的`ref`对象在组件的整个生命周期内保持不变。 将定时器函数提取出来，每次定时器触发时，都能取到最新到`count`.

```
function Counter() {
  let [count, setCount] = useState(0);
  const myRef = useRef(null);
  myRef.current = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const id = setInterval(() => {
      myRef.current();
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <h1>{count}</h1>;
}
```

> 思考：为什么不直接`setInterval(myRef.current, 1000)`这样写不行呢,还要包个方法返回？
>
> ```
> function Counter() {
>   let [count, setCount] = useState(0);
>   const myRef = useRef(null);
>   myRef.current = () => {
>     setCount(count + 1);
>   };
>   useEffect(() => {
>     const id = setInterval(myRef.current, 1000);
>     return () => clearInterval(id);
>   }, []);
>  return <h1>{count}</h1>;
> }
> ```

下面的例子可以很好的解释。假如把`myRef.current`为`cur`变量,定时器的第一个参数为`interval`变量，`cur`变量更改，`interval`的取的还是之前赋值的值。

```
var cur=()=>{var count=0;console.log(count)};
var interval=cur;
var cur=()=>{var count=1;console.log(count)};
interval();//0

var cur=()=>{var count=0;console.log(count)};
var interval=()=>{cur()};
var cur=()=>{var count=1;console.log(count)};
interval();//1
```

### 方案三、自定义hook

可以写个自定义`hook`，方便重复使用。

```
function useInterval(fun) {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current = fun;
  }, [fun]);
  useEffect(() => {
    const id = setInterval(() => {
      myRef.current();
    }, 1000);
    return () => clearInterval(id);
  }, []);
}

function Counter() {
  let [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  });
  return <h1>{count}</h1>;
}
```

### 方案四、用useReducer

将`count`变量存入`reducer`中，使用`useReducer`更新`count`

```
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "increment" });
    }, 1000);
   return () => clearInterval(id);
  }, []);
  return <h1>{state}</h1>;
}
```