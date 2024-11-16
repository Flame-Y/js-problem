// const curry = (fn, ...args) => {
//   return (...more) => {
//     if (more.length === 0) {
//       return fn(...args)
//     } else {
//       return curry(fn, ...args, ...more)
//     }
//   }
// }
const curry = (fn, ...args) => {
  return (...more) => {
    const allArgs = [...args, ...more];

    // 如果函数参数长度是动态的（不定参数），直接判断 more 是否为空以结束
    if (fn.length === 0) {
      return more.length === 0 ? fn(...allArgs) : curry(fn, ...allArgs);
    }

    // 对于固定参数函数，当参数足够时直接执行
    if (allArgs.length >= fn.length) {
      return fn(...allArgs);
    } else {
      // 否则递归返回函数继续收集参数
      return curry(fn, ...allArgs);
    }
  };
};

const sum = curry(initialSum)

// console.log(sum(1, 2, 1)(2)(3)())
// console.log(sum(1)(2)(3)());
// console.log(sum(1)(2, 3)(4)(5, 6, 7)());
console.log(sum(1)(3)(1));
// 不需要显式调用，但需要固定参数数量
// function curry(fn, ...args1) {
//   if (args1.length >= fn.length) {
//       return fn(...args1)
//   } else {
//       return (...args2) => curry(fn, ...args1, ...args2)
//   }
// }
