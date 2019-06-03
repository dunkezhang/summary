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
9. 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）



## BFC布局规则

1. 内部的box会在垂直方向一个接一个的放置；
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
3. 计算BFC的高度时，它内部的浮动元素也会被计算进去(可应用清除内部浮动)；
4. BFC的区域不会与float box重叠（自适应两栏布局）
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外部元素。反之也如此。


## BFC应用场景

1. 自适应两栏布局

	```
	<style>
    body {
        width: 300px;
        position: relative;
    }
 
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }
 
    .main {
        height: 200px;
        background: #fcc;
    }
	</style>
	<body>
	    <div class="aside"></div>
	    <div class="main"></div>
	</body>
	```
	

	
	![两列](https://s2.ax1x.com/2019/06/03/VYJ8zj.png)
	
	![两列自适应](https://s2.ax1x.com/2019/06/03/VYJ3WQ.png)
2. 清除内部浮动

	![图片](https://s2.ax1x.com/2019/06/03/VYJYyn.png)
	
	![浮动](https://s2.ax1x.com/2019/06/03/VYJJQs.png)
	
3. 防止垂直 margin 重叠



## 参考资料
* [CSS基础——块级元素、块级盒子以及BFC](https://juejin.im/post/5a7d22636fb9a0633c660359)
* [MDN——块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
* [布局概念 - 关于CSS-BFC深入理解](https://juejin.im/post/5909db2fda2f60005d2093db)