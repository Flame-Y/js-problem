class A {
    constructor(count) {
        this.count = count     
    }
    valueOf() {         
        return '我有这么多钱：' + this.count     
    } 
} 
let a = new A(100) 

console.log(a)              // A {count: 100} 
console.log(a.valueOf())   // 我有这么多钱：100 
console.log(a + 1)          // 我有这么多钱：1001
console.log(String(a));      // [object Object]
Object.prototype.toString = null;
console.log(String(a));      // 我有这么多钱：100 