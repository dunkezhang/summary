## react diff
1. 优点： 作为virtual dom的加速器，优化页面渲染，提高性能

2. react diff 策略

	1. Dom节点跨层级移动特别少，可以忽略不计。
	2. 不同类的两个组件会生成相似的树形结构，相同类的组件树形结构相同
	3. 同一层级相同父元素的子节点,她们可以用唯一id进行区分

3. diff算法执行时有3个维度，tree diff,component diff ,element diff
	1. tree diff

	react对树进行分层比较，属于同一层次的节点进行比较。当发现某一子节点不在了，直接删除改节点及其所有子节点，不会用于进一步的不叫
	
	注意：在开发组件时，保持稳定的 DOM 结构会有助于性能的提升。例如，可以通过 CSS 隐藏或显示节点，而不是真的移除或添加 DOM 节点。
	
	2. component diff

		 * 同一类型的组件则按照原策略继续比较virtual dom
		 * 不是同一类型的组件在react中会认为是dirty Component,从而替换整个组件下的所有节点
		 * 同一类型的组件如果用户准确知道virtual dom没有发生变化，可以通过react中的ShouldComponentUpdate中决定要不要进行diff


	3. element diff

	当节点处于同一层级时发生变化往往是数组发生变化，react diff提供3中节点操作，分别是插入、移动和删除
	
	* 插入 当新的dom树该层的集合中有，老的dom树集合中没有，则进行插入操作
	* 移动 当新的dom树集合中有，老的dom树该层的集合中也有，但是两个集合中的位置不一样则进行移动
	* 删除 当新的dom树集合中没有，老的dom树集合中有，则进行删除
	
4. 引用

	* [React 源码剖析系列 － 不可思议的 react dif](https://zhuanlan.zhihu.com/p/20346379?refer=purerender)

## vitual dom介绍一下

vitual dom本质是一个js对象，用对象来描述dom结构，至少包含节点类型，节点属性，子节点。它是在数据和真实dom建立了一层缓冲。对于开发者而言，数据变化就调用react的渲染方法，而react并不是得到一个新的dom进行替换，先生成一个vitualdom，再和上一次的virtual dom进行对比，找到改变的地方，再把变化的地方更新再真实的dom上，优化了性能

## vitual dom优势和劣势
优势：

1. 性能优化： 它减少了同一时间内的页面多处内容修改所触发的浏览器reflow和repaint的次数，可能把多个不同的DOM操作集中减少到了几次甚至一次，优化了触发浏览器reflow和repaint的次数。
2. 无需手动操作dom
3. 跨平台，虚拟DOM本质是一个对象，而DOM与平台强相关，相比之下虚拟DOM可以进行更方便的跨平台操作，例如服务器渲染

缺点:

无法进行极致优化: 在一些性能要求极高的应用中虚拟DOM无法进行针对性的极致优化,比如VScode采用直接手动操作DOM的方式进行极端的性能优化

## react hook
解决的痛点

1. 状态逻辑复用
2. 就是要解决 class 中生命周期函数经常包含不相关的逻辑，但又把相关逻辑分离到了几个不同方法中的问题。
3. 不用学习class，不用去了解this,入门难度降低


## redux解决的痛点

对于复杂的单页面应用，状态（state）管理非常重要。state 可能包括：服务端的响应数据、本地对响应数据的缓存、本地创建的数据（比如，表单数据）以及一些 UI 的状态信息（比如，路由、选中的 tab、是否显示下拉列表、页码控制等等）。如果 state 变化不可预测，就会难于调试（state 不易重现，很难复现一些 bug）和不易于扩展（比如，优化更新渲染、服务端渲染、路由切换时获取数据等等）


## redux的核心思想（让状态可预测）
1. 单一数据源
2. 数据不可更改
3. reducer纯函数，（为了把action和state串起来，开发了一些函数，这就是reducer）,reducer只是一个接收state和action，并返回一个新的state的函数


## redux怎么改值

	redux的核心dispatch一个action，reducer接收到state和action，并返回一个新的state函数
	
## react fiber
1. 为什么要引入react fiber
2. react fiber的方式
3. react fiber对现有代码的影响

## 路由实现
1.hash 模式
使用URL hash值来作路由。支持所有的浏览器，包括不支持HTML History Api的浏览器
根据监听哈希变化触发的事件 —— hashchange 事件
2.history
依赖HTML5 History APi和服务器配置
重点说其中的两个新增的API history.pushState 和 history.replaceState