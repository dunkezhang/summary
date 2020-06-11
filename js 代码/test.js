
/** 写一个函数，参数为数据和函数，原数组删除满足函数条件数组项，并且返回已经删除的
 * 
*/
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc,item)=>{
      arr.splice(arr.indexOf(item),1)
      return [...acc,item]
    },[])
    : [];
const a=[1,2,3,4]
console.log(remove(a, n => n % 2 === 0)); // [2, 4]
console.log(a) //[1,3]

export function includesBigUnicode(s) {
  s = String(s)
  return [...s].length !== s.length
}
// 检测是否包含Emoji
export function checkEmoji(str) {
  return includesBigUnicode(str)
}