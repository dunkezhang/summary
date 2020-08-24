function defineReactive (data, key, value){
  Object.defineProperty(data,key,{
    enumerable: true,
    configurable: true,
    get: function(){
      console.log('get')
      return value
    },
    set: function(newVal) {
      console.log('set new value:', newVal)
      value = newVal
    }
  })
}
function observe(data){
  Object.keys(data).forEach((key)=>{
    defineReactive(data,key,data[key])
  })
}
let arr = [1,2,3]
observe(arr)
arr[1]
arr[1] = 'change'