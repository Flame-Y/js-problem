let obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3
  },
  e: 4,
  h: {
    i: 5
  }
}
let obj2 = {
  a: 111,
  b: {
    c: 222,
    f: 333
  },
  g: 444,
  h: 666
}

function mergeObject(obj1, obj2) {
  let res = {}
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        res[key] = mergeObject(obj1[key], obj2[key])
      } else {
        res[key] = obj2[key]
      }
    } else {
      res[key] = obj1[key]
    }
  }
  for (let key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      res[key] = obj2[key]
    }
  }
  return res
}
let res = mergeObject(obj1, obj2)
console.log(res)
