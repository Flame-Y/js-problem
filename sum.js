const initialSum = (...args) => args.reduce((a, b) => a + b, 0)

const curry = (fn, ...args) => {
  return (...more) => {
    if (more.length === 0) {
      return fn(...args)
    } else {
      return curry(fn, ...args, ...more)
    }
  }
}

const sum = curry(initialSum)

console.log(sum(1, 2, 1)(2)(3)())
