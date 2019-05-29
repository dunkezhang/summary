## 什么是BFC

 BFC 是一块独立的渲染区域，只有它内部的`块级盒子`参与它的布局。这些块级盒子的布局方式不会受BFC外部布局的影响，同时它们也不会影响BFC外部的布局。
## BFC产生

以下任意一种情况都能在其内部产生BFC：

1. 根元素或其他包含它的元素（注：我不是很理解这句话是什么意思）
2. postion 为absolute 和fixed的元素
3. float不为none的元素
4. overflow不为visible的元素
5. 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
6. 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
7. 内联块元素，即display的值为inline-block的元素；
8. 流式布局根元素，display值为flow-root的元素；



## BFC规则

1. BFC内部的块级盒子会在垂直方向一个接一个的堆放，并且相邻的块级盒子的外边距(Margin)会折叠，以最大的一个外边距作为两个盒子之间的距离；
2. 计算BFC的高度时，它内部的浮动元素也会被计算进去；


## BFC应用场景

1. 自适应两栏布局
2. 清除内部浮动
3. 防止垂直 margin 重叠



## 参考资料

* https://www.w3.org/TR/CSS21/visuren.html#block-formatting
* [CSS基础——块级元素、块级盒子以及BFC](https://juejin.im/post/5a7d22636fb9a0633c660359)
* [MDN——块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)