// 实现一个mySymbol方法，不能作为构造函数使用(使用普通函数实现),
// mySymbol接收一个字符串作为参数，返回一个唯一值，每次返回的值都不相等，for方法也接收一个字符串作为参数，
// 如果之前已经存在同样参数，那么返回值应该和之前同样参数的返回值相等。

const mySymbol = (function () {
  const registry = {}
  let idCounter = 0
  function mySymbol(str) {
    if (typeof str !== "string") {
      throw new Error("mySymbol must receive a string as its parameter")
    }

    // 禁止使用 new 关键字
    if (new.target !== undefined) {
      throw new Error("mySymbol cannot be invoked with new")
    }
    // 生成一个唯一值，可以使用一个计数器
    const symbol = {
      description: str,
      id: idCounter++,
      toString() {
        return `Symbol(${this.description})`
      }
    }
    return symbol
  }

  mySymbol.for = function (str) {
    if (typeof str !== "string") {
      throw new Error("mySymbol must receive a string as its parameter")
    }
    if (registry[str]) {
      return registry[str]
    }
    const symbol = {
      description: str,
      id: idCounter++,
      toString() {
        return `Symbol(${this.description})`
      }
    }
    registry[str] = symbol
    return symbol
  }

  return mySymbol
})()

const a1 = mySymbol("foo")
const a2 = mySymbol("foo")
const a3 = mySymbol.for("foo")
const a4 = mySymbol.for("foo")
// const a5 = new mySymbol("foo") // Error: mySymbol must receive a string as its parameter


console.log(a1 === a2) // false
console.log(a1 === a3) // false
console.log(a3 === a4) // true
