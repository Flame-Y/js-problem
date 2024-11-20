class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(event, fn) {
    if (this.events[event]) {
      this.events[event].push(fn)
    } else this.events[event] = [fn]
  }

  off(event, fn) {
    if (this.events[event]) {
      for (let i = 0; i < this.events[event].length; i++) {
        if (this.events[event][i] === fn) this.events[event].splice(i, 1)
      }
    }
  }

  emit(event, ...arg) {
    if (this.events[event]) {
      this.events[event].forEach((fn) => {
        fn(arg)
      })
    }
  }

  removeAllListener(event = undefined) {
    if (event === undefined) {
      this.events = {}
    } else delete this.events[event]
  }

  listeners(event) {
    return this.events[event]
  }

  once(event, fn) {
    const onceListener = (...args) => {
      fn(...args)
      this.off(event, onceListener)
    }
    this.on(event, onceListener)
  }
}
