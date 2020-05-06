function observe(){
return new Proxy({}, {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    }
  });
}
let arr = [1,2,3]
arr = observe()
arr[1]
arr[1] = 'change'
arr.push(4)
console.log(arr)
