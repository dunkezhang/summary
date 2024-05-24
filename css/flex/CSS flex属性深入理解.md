## CSS flex属性深入理解

https://www.zhangxinxu.com/wordpress/2019/12/css-flex-deep/



## flex:0 flex:1 flex:none flex:auto应该在什么场景下使用？

https://www.zhangxinxu.com/wordpress/2020/10/css-flex-0-1-none/



初始值。`flex:initial`等同于设置`"flex: 0 1 auto"`

`flex:auto`等同于设置`"flex: 1 1 auto"`。

flex:none`等同于设置`"flex: 0 0 auto"

flex: 1等同设置flex: 1 1 0%



 flex:1 ---其实应写成，

   flex-grow: 1;

   flex-shrink: 1;

   flex-basis: 0% (忽略自身宽度)

​    

  flex:auto ---其实应写成，

   flex-grow: 1;

   flex-shrink: 1;

   flex-basis: auto（元素自身宽度）

  

 

flex:1 和flex:auto 的区别：

 

   由于在这里只有一个元素，所以效果是一样的。两者的区别是 flex-basis属性

 

   如果是多个元素，则flex:1   代表剩余空间均分，即去除内外边距、边框，但是忽略自身元素宽度等。

   flex:auto 去除内外边距、边框，但是要加上自身元素宽度。

 

总结：如果你要完全等分布局使用flex:1 ，如果你要根据内容宽度动态分配宽度则使用flex:auto（顶部导航条根据内容自动撑开） 。
