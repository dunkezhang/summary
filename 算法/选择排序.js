function findSmallest(arr) {
  let smallest = arr[0]
  let smallest_index = 0
  for(let i=0; i<arr.length; i++ ){
    if(arr[i] < smallest) {
      smallest = arr[i]
      smallest_index = i
    }
  }
  return smallest_index
}

function selectionSort(arr) {
  let newArr = []
  while(arr.length>0) {
    let smallest_index = findSmallest(arr)
    newArr.push(arr[smallest_index])
    arr.splice(smallest_index,1)
  }
  return newArr
}

let newArr = selectionSort([8,3,4,1,5])