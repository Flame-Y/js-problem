class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(event, listener) {
    if (this.events[event]) {
      this.events[event].push(listener)
    } else this.events[event] = [listener]
  }

  off(event, listener) {
    if (this.events[event]) {
      for (let i = 0; i < this.events[event].length; i++) {
        if (this.events[event][i] === listener) this.events[event].splice(i, 1)
      }
    }
  }

  emit(event, ...arg) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => {
        listener(arg)
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

  once(event, listener) {
    const onceListener = (...args) => {
      listener(...args)
      this.off(event, onceListener)
    }
    this.on(event, onceListener)
  }
}
