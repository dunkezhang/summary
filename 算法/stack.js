const _item = Symbol('stackItem')
const _count = Symbol('count')
class Stack {
  constructor() {
    this[_item] = []
  }
  push(element) {
    this[_item].push(element)
  }
  pop() {
    this[_item].pop()
  }
  size() {
    return this[_item].length
  }
  clear() {
    this[_item] = []
  }
  isEmpty() {
    return this[_item].length ===0
  }
  peek() {
    return this[_item][this[_item].length-1]
  }
}


class Stack2 {
  constructor() {
    this[_item] = {}
    this[_count] = 0
  }
  push(element) {
    this[_item][this[_count]] = element
    this[_count] ++
  }
  pop() {
    if(this.isEmpty()){
      return undefined
    }
    this[_count]--
    let result = this[_item][this[_count]]
    delete this[_item][this[_count]]
    return result
  }
  size() {
    return this[_count]
  }
  clear() {
    this[_item] = {}
    this[_count] = 0
  }
  isEmpty() {
    return this[_count] ===0
  }
  peek() {
    if(this.isEmpty()){
      return undefined
    }
    return this[_item][this[_count]-1]
  }
}
let stack = new Stack2
stack.push(1)
stack.push(2)
console.log(stack)