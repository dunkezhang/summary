function sumArr(arr) {
  if(arr.length===1) {
    return arr[0]
  } else {
    return arr[0] + sumArr(arr.slice(1))
  }
}