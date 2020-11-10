const _item = Symbol('stackItem')
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