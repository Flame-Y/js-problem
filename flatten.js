function flatten(obj, k) {
  if (typeof obj === "number") {
    const ky = k.slice(1).join("")
    console.log(k)
    res[ky] = obj
    return
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      flatten(obj[key], [...k, ".", key])
    }
  }
}

const obj = {
  a: {
    b: {
      c: 2,
      d: 5
    },
    e: {
      f: 1,
      h: {
        i: 3
      }
    }
  },
  j: 4
}
// { 'a.b.c': 2, 'a.b.d': 5, 'a.e.f': 1, 'a.e.h.i': 3, j: 4 }
const res = {}

flatten(obj, [])
console.log(res)
