/*```ts
import { useState } from "react";
// Usage
function App() {
  const [name, setName] = useLocalStorage("name", "Bob");

}
```*/

// Hook
// window.localStorage.getItem
// window.localStorage.setItem

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from "react"

type SetValue<T> = Dispatch<SetStateAction<T>>
/**
 * @param key 在 localStorage 中存储数据的键值
 * @param initialValue 在 localStorage 中找不到对应数据时的默认值
 * @returns [storedValue, setValue]
 * @example const [user, setUser] = useLocalStorage('user', { name: 'John', age: 30 });
 *
 **/
function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // 传入一个函数，惰性获取 localStorage 中存储的值，如果没有则返回 initialValue
  const [storedValue, setStoredValue] = useState(() => {
    // codes
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })
  // 更新 storedValue 的值，并将新值存储到 localStorage 中
  const setValue = (value) => {
    // codes
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }
  // 在组件挂载时从 localStorage 中读取对应的值，并更新 storedValue
  useEffect(() => {
    const item = window.localStorage.getItem(key)
    item && setStoredValue(JSON.parse(item))
  }, [key])
  return [storedValue, setValue]
}
