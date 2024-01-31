function repeat(times, delay, action) {
  return function (...args) {
    let count = 0
    let interval = setInterval(() => {
      action(...args)
      count++
      if (count >= times) clearInterval(interval)
    }, delay)
  }
}

let timeLog = repeat(2, 1000, console.log)
timeLog("hello world")
timeLog("ByteDance")
//'hello world'
//'ByteDance'
//'hello world'
//'ByteDance'
