function mergeSort(array) {
  if (array.length < 2) return array
  const mid = Math.floor(array.length / 2)
  const leftArr = array.slice(0, mid)
  const rightArr = array.slice(mid)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  let result = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  while (leftArr.length) result.push(leftArr.shift())
  while (rightArr.length) result.push(rightArr.shift())
  return result
}

console.log(mergeSort([1, 3, 2, 5, 4, 6, 7, 8, 9, 10]))
