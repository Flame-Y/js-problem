import { useState } from "react"

interface Options {
  min?: number
  max?: number
}
function isNumber(val: unknown): val is number {
  return typeof val === "number" && !isNaN(val)
}
type ValueParam = number | ((c: number) => number)

function getTargetValue(val: number, options: Options = {}) {
  const { min, max } = options
  let target = val
  if (isNumber(max)) {
    target = Math.min(max, target)
  }
  if (isNumber(min)) {
    target = Math.max(min, target)
  }
  return target
}

function useCounter(init = 0, options: Options = {}) {
  const { min, max } = options

  const [current, setCurrent] = useState(() => {
    if (isNumber(max)) {
      return Math.min(init, max)
    }
    if (isNumber(min)) {
      return Math.max(init, min)
    }
  })

  const setValue = (value: ValueParam) => {
    setCurrent((c) => {
      const target = isNumber(value) ? value : value(c)
      if (isNumber(max)) {
        return Math.min(target, max)
      }
      if (isNumber(min)) {
        return Math.max(target, min)
      }
      return target
    })
  }

  const inc = (delta: number = 1) => {
    setValue((c) => c + delta)
  }

  const dec = (delta: number = 1) => {
    setValue((c) => c - delta)
  }

  const set = (value: ValueParam) => {
    setValue(value)
  }

  const reset = () => {
    setValue(init)
  }

  return [current, { inc, dec, set, reset }] as const
}
