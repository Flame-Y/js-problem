new Promise((resolve, rejected) => {
  throw new Error("err")
})
  .then((res) => {
    console.log(1, res)
  })
  .catch((err) => {
    console.log(2, err)
  })
  .then((res) => {
    console.log(3, res)
  })
  .catch((err) => {
    console.log(4, err)
  })
