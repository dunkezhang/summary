class BinaryTreeNode {
  constructor(data) {
    this.key = data
    this.left = null // 左侧子节点的引用
    this.right = null // 右侧子节点引用
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(key) { 
    // 插入节点,向树中插入一个新的键
    if(this.root === null) {
      this.root = new BinaryTreeNode(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  search(key) {
    //在树中查找一个键，如果节点存在则返回true，如果不存在则返回false
    return this.searchNode(this.root,key)
  }
  min() {
    // 返回树中最小的值
    if(this.root === null) {
      return null
    } 
    let current = this.root
    while(current.left !== null) {
      current = current.left
    }
    return current.key
  }
  max() {
    // 返回树中最大的值
    if(this.root === null) {
      return null
    } 
    let current = this.root
    while(current.right !== null) {
      current = current.right
    }
    return current.key
  }
  remove(key) {
    //从树中移除某个键
    // 删除分3中情况
    //1.被删除的节点没有子节点
    //2.被删除的节点只有一个子节点
    //3.被删除的节点有2个子节点，取右节点最小节点

  }
  preOrderTraverse(callback) {
    // 先序遍历
    this.preOrderTraverseNode(this.root,callback)
  }
  inOrderTraverse(callback) {
    // 中序遍历
    this.inOrderTraverseNode(this.root,callback)
  }
  postOrderTraverse(callback) {
    // 后序遍历
    this.postOrderTraverseNode(this.root, callback)
  }
  insertNode(node, key) {
    let newNode = new BinaryTreeNode(key)
    if(key < node.key) {
      if(node.left === null){
        node.left = newNode
      } else {
        this.insertNode(node.left, key)
      }
    } else if(key > node.key) {
      if(node.right === null){
        node.right = newNode
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  preOrderTraverseNode(node, callback) {
    if(node !== null){
      callback(node.key)
      this.preOrderTraverse(node.left, callback)
      this.preOrderTraverse(node.right, callback)
    }
  }
  inOrderTraverseNode(node, callback){
    this.inOrderTraverseNode(node.left, callback)
    callback(node.key)
    this.inOrderTraverseNode(node.right, callback)
  }
  postOrderTraverseNode(node, callback) {
    if(node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  searchNode(node, key) {
    if(node === null) {
      return false
    }
    if(node.key<key){
      return this.searchNode(node.left,key)
    } else if(node.key > key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  removeNode(node, key) {
    
  }
}
let binarySearchTree = new BinarySearchTree()
console.log('min key', binarySearchTree.min())
binarySearchTree.insert(4)
binarySearchTree.insert(5)
binarySearchTree.insert(3)
let callFun = (data)=>console.log(data)
binarySearchTree.postOrderTraverse(callFun)
console.log('min key', binarySearchTree.min())
console.log('max key', binarySearchTree.max())


