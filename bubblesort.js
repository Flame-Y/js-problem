function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++)
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

let nums = [3, 4, 1, 2, 5]
console.log(bubbleSort(nums))
