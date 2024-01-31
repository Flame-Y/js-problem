// 利用promise实现隔1秒输出1，输出1后，然后再隔2秒输出2.....直到再隔10秒输出10.
// (代码上不能写成10个then的形式，也就是说需要考虑数很大的情况比如隔100秒输出100)

// function delayedOutput(num, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(num)
//       resolve()
//     }, delay)
//   })
// }

function outputNumbersSequentially(start, end) {
  if (start > end) {
    return
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(start)
      resolve()
    }, start * 1000)
  }).then(() => {
    outputNumbersSequentially(start + 1, end)
  })
}

outputNumbersSequentially(1, 10)
