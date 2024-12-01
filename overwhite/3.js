class A {
    constructor(count) {
        this.count = count;
    }
    valueOf() {
        return 2;
    }
    toString() {
        return "toString";
    }
    [Symbol.toPrimitive](hint) {
        if (hint === "number") {
            return 10;
        }
        if (hint === "string") {
            return "string";
        }
        return true;
    }
}

const a = new A(1);
console.log("a.toString():", a.toString());
console.log("a:", a);
console.log("+a:", +a);
console.log("Number(a):", Number(a));
console.log("String(a):", String(a));
console.log("+str:", a + '11'); // true11
console.log("Boolean(a):", Boolean(a));

