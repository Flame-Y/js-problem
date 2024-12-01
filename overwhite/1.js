class A {
    valueOf() {
        return 2     
    }     
    toString() {
      return '哈哈哈'     
    } 
} 
let a = new A() 
console.log("a:", a);
console.log(String(a))  // '哈哈哈'   => (toString)
console.log(Number(a))  // 2         => (valueOf) 
console.log(a + '22')   // '222'     => (valueOf) 
console.log(a == 2)     // true      => (valueOf) 
console.log(a === 2)    // false     => (严格等于不会触发隐式转换)

// 在进行对象转换时，将优先调用toString方法，如若没有重写 toString，将调用 valueOf 方法；如果两个方法都没有重写，则按Object的toString输出。
// 在进行强转字符串类型时，将优先调用 toString 方法，强转为数字时优先调用 valueOf。
// 使用运算操作符的情况下，valueOf的优先级高于toString