// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

//  

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4:

// 输入: s = ""
// 输出: 0

/**
 * @param {string} s
 * @return {number}
 */
// 第一次做法，暴力解题。时间复杂度太大
var lengthOfLongestSubstring = function(s) {
  let max = 0
  for(let i=0;i<s.length;i++){
    for(let j=i;j<s.length;j++){
      let str = s.slice(i,j+1)
      const arr=new Set([...str]) 
      if(arr.size === str.length){
        max=str.length>max?str.length:max
      }
      } 
    }
  return max
}
// 该用滑动窗口的思想，把时间复杂读O(n^2)改为O(n)
var lengthOfLongestSubstring1 = function(s) {
  let arr = []
  let max = 0
  for(let i=0;i<s.length;i++){
    let index = arr.indexOf(s[i])
    if(index>-1){
      arr.splice(0,index+1)
    }
    arr.push(s[i])
    max = Math.max(arr.length,max)
  }
  return max
}
let len = lengthOfLongestSubstring1("abcabcdd")
console.log(len)