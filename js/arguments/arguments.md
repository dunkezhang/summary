arguments 对象作为函数参数的别名，两个的值完全相等

```
function infiltrate(person) {
  console.log('person',person)
  console.log('arguments',arguments[0])
  person='b'
  console.log('person',person)
  console.log('arguments',arguments[0])
  arguments[0] = 'c'
  console.log('person',person)
  console.log('arguments',arguments[0])
}
infiltrate('a')
```

运行结果如下：![1](/Users/zhangdunke/Documents/personal/summary/arguments/1.png)



当使用严格模式，arguments将不在作为参数的别名，我的理解是现在两个已经脱离联系，相当于两个不同的变量

```
'use strict';
function infiltrate(person) {
  console.log('person',person)
  console.log('arguments',arguments[0])
  person='b'
  console.log('person',person)
  console.log('arguments',arguments[0])
  arguments[0] = 'c'
  console.log('person',person)
  console.log('arguments',arguments[0])
}
infiltrate('a')
```

运行结果如下：

![2](/Users/zhangdunke/Documents/personal/summary/arguments/2.png)

