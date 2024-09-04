/**请你编写一个异步函数 promisePool ，它接收一个异步函数数组 functions 和 池限制 n。
 * 它应该返回一个 promise 对象，当所有输入函数都执行完毕后，promise 对象就执行完毕。 */
async function promisePool(functions, n) {
  const resolved = []
  const queue = new Set()
  for (const task of functions) {
    const x = task().then((res) => {
      resolved.push(res)
      queue.delete(x)
    })
    queue.add(x)
    if (queue.size >= n) await Promise.race(queue)
  }
  await Promise.allSettled(queue)
  return resolved
}
