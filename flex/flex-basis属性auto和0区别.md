### flex 缩写
flex:1 ===> 1,1,0
flex:auto ===> 1,1,auto
flex:none ===> 0,0,auto

## flex-basis: auto 和flex-basis: 0 区别
flex-basis的属性值为auto时，在width有声明的情况下以width计算，没有声明的情况以content为标准
flex-basis的属性值为0时，盒子宽度就为0，

以上都是求得宽度后再去计算剩余宽度
例如：
```
<div style={{ width: '375px', display: 'flex' }}>
   <div style={{ flex: '1' }}>子元素</div>
   <div style={{ flex: '1', width: 20 }}>子元素</div>
 </div>
```

1. flex:1 首先是flex-grow:1,flex-shrink:1,flex-basis：0的简写
2. flex-basis: 0，那么第二个div的width就不生效，以flex-basis为准
3. 那么剩余空间为 375-0-0=375
4. 每项获得的空间就为 375/2 = 187.5
5. 所以最终第一个div的宽度为187.5，第二个div的宽度为187.5

```
<div style={{ width: '375px', display: 'flex' }}>
   <div style={{ flex: 'auto' }}>子元素</div>
   <div style={{ flex: 'auto', width: 20 }}>子元素</div>
 </div>
```

1. flex： auto首先是flex-grow:1,flex-shrink:1,flex-basis：auto的简写
2. flex:auto的含义是如果有width就以宽度为准，如果没有宽度就以content（内容）宽度为准，第一个div盒子就以内容宽度为准42px，第二个div就以width为准，20px
3. 剩余宽度就为 375 - 42 - 20 = 313
4. 每份分配的声誉宽度为 313/2 = 156.5
5. 最终第一个div的宽度就为 156.5 + 42 = 198.5，第二个div的宽度为 156.5+20 = 176.5

