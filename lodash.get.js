function myGet(obj, path, defaultValue) {
  if (typeof path === "string") {
    path = path
      .replace(/([\[\]])/g, ($1) => {
        return $1 === "[" ? "." : ""
      })
      .split(".")
  }

  if (
    !obj ||
    typeof obj !== "object" ||
    !Array.isArray(path) ||
    path.length === 0
  ) {
    return path.length === 0 ? obj : defaultValue
  }

  let target = obj
  for (const item of path) {
    target = target[item]
    if (!target) break
  }

  return target || defaultValue
}

const testObj = { a: [{ b: { c: 3 } }] }

console.log(myGet(testObj, "a[0].b.c", 1))
