function resolve(str) {
  let ans = {}
  let arr = str.split(".")
  let target = ans
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i]
    if (i === arr.length - 1) {
      target[key] = null
    } else {
      target[key] = {}
      target = target[key]
    }
  }
  return ans
}

let str = "a.b.c"
console.log(resolve(str))
// {
//   a:{
//     b:{
//       c:null
//     }
//   }
// }
