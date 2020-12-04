class Node {
  constructor(element){
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }
  append(element) { //向链表链尾添加节点
    const node = new Node(element)
    if(this.head === null){
      this.head = node
    } else {
      let current = this.getElementAt(this.length-1)
      current.next = node
    }
    this.length++
  }

  insert(element, position) { // 向链表指定位置插入节点
    if(position < 0 || position > this.length) {
      return null
    } 
    const node = new Node(element)
    if(position ===0){
      node.next = this.head
      this.head = node
    } else {
      let previos = this.getElementAt(position-1)
      node.next = previos.next
      previos.next = node
    }
    this.length++
  }

  getElementAt(position) { //返回链表特定位置的元素
    if(position<0 || position>= this.length) {
      return null
    }
    let current = this.head
    for (let i=0;i<position;i++){
      current = current.next
    }
    return current
  }

  remove(element) { //从链表中移除一个元素
    let index = this.indexof(element)
    let removeNode = this.removeAt(index)
    return removeNode
  }

  indexof(element) { //返回链表的索引
    let current = this.head
    for(let i=0;i<this.length;i++){
      if (current.element === element) return i;
      current = current.next
    }
    return -1
  }
  removeAt(position) { // 从链表特定位置删除一个元素
    if(position<0 || position>= this.length) {
      return null
    } 
    let current = this.head
    if(position === 0){
      this.head = current.next
    } else {
      let removeNodePrev = this.getElementAt(position-1)
      current = removeNodePrev.next
      removeNodePrev = current.next
    }
    this.length--
    return current
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }
  
  clear() {
    this.head = null;
    this.length = 0;
  }

  toString() {
    let current = this.head
    let s = ''
    while(current) {
      s+=current.element+'\n'
      current = current.next
    }
    return s
  }

  getHead() {
    return this.head
  }
}



class DoubleNode {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}
class DoubleLinkedList extends LinkedList{
  constructor() {
    super()
    this.tail = null
  }
  append(element) {
    let node = new DoubleNode(element)
    if(this.length === 0) {
      this.tail = node
      this.head = node
    } else {
      node.prev = this.tail.next
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }

  insert(element, position){
    if(position<0 || position> this.length){
      return false
    }
    let node = new DoubleNode()
    if(position ===this.length) {
      this.append(element)
    } else if(position === 0) {
      if(this.length ===0){
        this.head = node
        this.tail = node
      }else {
        node.next = this.head
        this.head.prev = node
        this.head = node
      }
    } else {
      let current = this.getElementAt(position)
      node.next = current
      node.prev = current.prev
      current.prev.next = node
      current.prev = node
    }
  }

  getElementAt(position) {
    if (position < 0 || position >= this.length) return null
    let current 
    if(position>Math.floor(position/2)){ // 遍历的位置超过中间，从尾部开始遍历
      current = this.tail
      for (let i = position;i<this.length;i++){
        current = current.prev
      }
    }else {
      current = super.getElementAt(position)
    }
    return current
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) return null
    if(position === 0) { // 移除头部
      let current = this.head
      current.next.prev = null
      this.head = current.next
      if(this.length ===1)this.tail = null
    } else if(position === this.length-1){ // 移除尾部
      let current = this.tail
      this.tail = current.prev
      current.prev.next = null
    } else { // 移除中间
      current = this.getElementAt(position)
      current.next.prev = current.prev
      current.prev.next = current.next
    }
    this.length--
  }
}