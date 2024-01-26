function stringFormat(s) {
  let ans = []
  let lines = s.split("\n")
  lines.forEach((line) => {
    let data = line.split(" ").filter((item) => item !== "")
    if (data.length) ans.push(data.map((item) => Number(item)))
  })
  return ans
}

let str = `
1 2 4342    3 4 5
23 4
    4  5
`
let ans = [
  [1, 2, 4342, 3, 4, 5],
  [23, 4],
  [4, 5]
]

console.log(stringFormat(str))
