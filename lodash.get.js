function myGet(obj, path, defaultValue) {
  if (typeof path === "string") {
    let arr = path.split(".")
    path = arr.flatMap((p) => {
      if (p.includes("[")) {
        let [key, index] = p.split("[")
        index = index.replace("]", "")
        return [key, index]
      } else return p
    })
  }

  if (!path.length) return obj
  if (typeof obj !== "object") return defaultValue

  let target = obj
  for (const item of path) {
    target = target[item]
    if (!target) break
  }
  return target ? target : defaultValue
}

const testObj = { a: [{ b: { c: 3 } }] }

console.log(myGet(testObj, "a[0].b.c", 1))

const testObj2 = { a: { b: { c: 1 } } }
console.log(myGet(testObj2, "a.b.c", 3))
