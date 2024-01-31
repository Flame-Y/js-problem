const p = new Promise((res) => res())
p.then(
  () => {
    console.log(1)
    throw new Error("err")
  },
  () => {
    console.log(2)
  }
)
  .then(
    () => {
      console.log(3)
    },
    () => {
      console.log(4)
    }
  )
  .then(
    () => {
      console.log(5)
    },
    () => {
      console.log(6)
    }
  )
