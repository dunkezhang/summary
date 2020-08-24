最近做项目遇到一个需求，在发送第二次请求的时候要取消第一次请求，axios提供了取消请求的方法：https://github.com/axios/axios，应用在vue项目的代码如下：

## 取消axios

```javascript
export default {
  data() {
    source: null,
  },
  methods: {
    fetchData() {
      this.source = axios.CancelToken.source()
      axios.get('/api',{
        cancelToken: this.source.token,
        params
      }).then(res=>{
        // deal success
      }).catch(err=>{
        if(axios.isCancel(error)){
          // 处理取消axios的情况
        } else {
          //处理其他异常情况
        }
      })
    }
  }
}
```

