/** 
实现一个 HardMan:
HardMan(“jack”) 输出:
I am jack

HardMan(“jack”).rest(10).learn(“computer”) 输出
I am jack
//等待10秒
Start learning after 10 seconds
Learning computer

HardMan(“jack”).restFirst(5).learn(“chinese”) 输出
//等待5秒
Start learning after 5 seconds
I am jack
Learning chinese
*/
class hardMan {
  constructor(name) {
    this.tasks = []
    setTimeout(() => {
      this.next()
    }, 0)
    this.tasks.push(() => {
      console.log(`I am ${name}`)
      this.next()
    })
  }

  next() {
    let task = this.tasks.shift()
    task && task()
  }

  rest(time) {
    this.tasks.push(() => {
      setTimeout(() => {
        console.log(`Start learning after ${time} seconds`)
        this.next()
      }, time * 1000)
    })
    return this
  }

  learn(subject) {
    this.tasks.push(() => {
      console.log(`Learning ${subject}`)
      this.next()
    })
    return this
  }

  restFirst(time) {
    this.tasks.unshift(() => {
      setTimeout(() => {
        console.log(`Start learning after ${time} seconds`)
        this.next()
      }, time * 1000)
    })
    return this
  }
}

const HardMan = (name) => new hardMan(name)

HardMan("jack").rest(10).learn("computer")
HardMan("jack").restFirst(5).learn("chinese")
