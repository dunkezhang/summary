## 四种数据集合
* map
* set
* array
* object

##伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
###伪数组转成数组
* Array.prototype.slice.call(Array-like)
* Array.from(array-like)