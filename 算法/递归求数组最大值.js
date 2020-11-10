function maxArr(arr){
  if(arr.length ===2){
    return arr[0]>arr[1]?arr[0]:arr[1]
  } 
  else if(arr.length===1) {
    return arr[0]
  }
  else {
    if(arr[0]>arr[1]) {
      arr.splice(1,1)
    } else {
      arr.splice(0,1)
    }
    return maxArr(arr)
  }
}