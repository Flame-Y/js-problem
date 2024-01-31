var p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(100)
  }, 2000)
})

p.then((result) => {
  return new Promise((resolve, reject) => {
    resolve(200)
  })
})
  .then((res) => {
    console.log(res)
  })
  .then((res) => {
    console.log(res)
  })
