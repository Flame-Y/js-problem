// 实现柯里化
function add(a) {
  function sum(b) {
    // 使用闭包
    a = b ? a + b : a // 累加
    return sum
  }
  sum.toString = function () {
    // 只在最后一次调用
    return a
  }
  return sum
}
console.log(+add(1)(2)(3))
