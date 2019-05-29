## 四种数据集合
* map
* set
* array
* object

##伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
###伪数组转成数组
* Array.prototype.slice.call(Array-like)
* Array.from(array-like)

## diff
React diff 作为 Virtual DOM 的加速器，其算法上的改进优化是 React 整个界面渲染的基础，以及性能提高的保障，同时也是 React 源码中最神秘、最不可思议的部分，本文从源码入手，深入剖析 React diff 的不可思议之处。
总结

* React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；

* React 通过分层求异的策略，对 tree diff 进行算法优化；

* React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；

* React 通过设置唯一 key的策略，对 element diff 进行算法优化；

建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；

建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。