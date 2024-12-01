// 如何让(a===1&&a===2&&a===3)的值为true?

class A {
    constructor(count) {
        this.count = count;
    }
    // 1. 重写valueOf / toString / [Symbol.toPrimitive]方法
    valueOf() {
        return this.count++;
    }
}

let a = new A(1);
console.log(a == 1 && a == 2 && a == 3); // true
// 严格等于不会触发隐式转换
console.log(a === 1 && a === 2 && a === 3); // false

// 2. 使用Object.defineProperty方法
let value = 1;
Object.defineProperty(window, 'a', {
    get() {
        return value++;
    }
});
console.log(a == 1 && a == 2 && a == 3); // true
console.log(a === 1 && a === 2 && a === 3); // true
