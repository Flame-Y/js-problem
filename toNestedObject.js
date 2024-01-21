function transformInput(input) {
  const result = {}
  Object.keys(input).forEach((key) => {
    // 将对象的key进行拆分
    const splitKeys = key.split(".")
    let current = result
    splitKeys.forEach((k, index) => {
      if (index === splitKeys.length - 1) {
        current[k] = input[key]
      } else {
        current[k] = current[k] || {}
        current = current[k]
      }
    })
  })
  return result
}

// Example usage:
const input = {
  "a.b.c": 123,
  "a.c": 456
}

const output = transformInput(input)
console.log(output)
