// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//自己感觉是在考链表，当一个链表设计出来了，这个题就迎刃而解了，就相当于链表的末尾添加
var addTwoNumbers = function(l1, l2) {
  let linkList = new LinkList()
  let carry = 0
  while(carry || l1 || l2) {
      let val1 = l1?l1.val:0
      let val2 = l2?l2.val:0
      if(l1) l1=l1.next
      if(l2) l2=l2.next
      let sumNumber = val1 + val2 + carry
      carry = sumNumber >= 10?1:0
      linkList.append(sumNumber%10)
  }
  return linkList.header
}
class LinkList {
  constructor() {
    this.header = null
  }
  append(data) {
    let node = new ListNode(data)
    if(this.header === null){
      this.header = node
    } else {
      let current = this.header
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
  }
}
