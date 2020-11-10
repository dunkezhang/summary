function quickSort(arr) {
  if(arr.length <2){
    return arr
  } else {
    let middleItem = arr[0]
    let greatArr = []
    let smallerArr = []
    let newArr = arr.slice(1)
    for(item of newArr) {
      if(item<= middleItem){
        smallerArr.push(item)
      } else {
        greatArr.push(item)
      }
    }
    return quickSort(smallerArr).concat(middleItem,quickSort(greatArr))
  }
}