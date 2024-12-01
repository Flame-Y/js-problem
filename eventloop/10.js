const p = document.createElement("p")
const body = document.querySelector("body")
p.innerHTML = "p"
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
new Promise((resolve) => {
  console.log(3)
  resolve()
}).then((res) => {
  console.log(4)
})
body.appendChild(p)
// 1 3 4 DOM更新 页面渲染 2