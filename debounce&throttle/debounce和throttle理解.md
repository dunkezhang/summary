
## 什么是防抖

当持续触发事件时，一定范围时间内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发事件，就重新开始延时

举例说明：当你乘电梯时，按下关电梯按钮，现在开始计时，如果5s内没有人点击开电梯按钮，你就会正常的乘着电梯上楼，如果5s内有人点击开电梯按钮，那么关门事件会重新开始延时5s再触发

### 什么是节流

当持续触发事件时，保证一定时间段内只调用一次事件处理函数。

举例说明：身为一个妹子，特别喜欢买化妆品。为了控制自己，节约钱，规定自己一个月买一次化妆品。


## 作用
处理高频事件，避免函数频繁调用，优化性能，减少浏览器或者服务器的压力。

## 防抖函数的应用场景

`规定时间多次触发，以最后一次结果为准`
	
1. 输入框格式验证
2. 输入框模糊搜索。输入框输入数据后向服务端请求数据拉一个列表。

## 节流函数的应用场景

`规定时间只触发一次，不以结果为准`

1. 屏幕尺寸变化时，执行相应逻辑
2. 监听鼠标滚动事件，执行相应逻辑
3. 监听重复点击事件，执行相应逻辑

	
## 防抖函数的实现

```
  function denounce(func,delay) {
      let timerId = null
      return function(){
        window.clearTimeout(timerId)
        let context = this
        let args = arguments
        timerId = setTimeout(()=>{
          func.call(context,args)
        },time)
      }
    }
```
## 节流函数的实现

```
function throttle(func, time) {
      let preTime = 0
      return function() {
        let currentTime = Date.now()
        let context = this
        let args = arguments
        if(currentTime-preTime>time){
          func.call(context,args)
          preTime = Date.now()
        }
      }
    }
```
## 参考资料
[js防抖和节流](https://www.cnblogs.com/momo798/p/9177767.html)
