const _new = function () {
  // 补全代码
  const obj = {}
  const Fn = [...arguments].shift()
  Object.setPrototypeOf(obj, Fn.prototype)
  const result = Fn.apply(obj, arguments)
  return Object.prototype.toString.call(result) === "[object Object]"
    ? result
    : obj
}
