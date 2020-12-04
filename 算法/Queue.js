class Queue {
  constructor(){
    this.item = {}
    this.count = 0
    this.lowestCount = 0
  }
  enqueue(element) {
    this.item[this.count] = element
    this.count++
  }
  dequenue() {
    if(this.isEmpty()) {
      return undefined
    }
    let result = this.item[this.lowestCount]
    delete this.item[this.lowestCount]
    this.lowestCount++
    return result

  }
  size() {
    return this.count-this.lowestCount
  }
  clear() {
    this.item = {}
    this.count = 0
    this.lowestCount = 0
  }
  isEmpty() {
    return this.size() ===0
  }
  peek() {
    if(this.isEmpty()) {
      return undefined
    }
    return this.item[this.lowestCount]
  }
}