function observe(data){
return new Proxy(data, {
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
let p = observe(arr)
// p[0]
p[1] = 'change'
// p.push(4)
// console.log(p)
// console.log(p[5])
