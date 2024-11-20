const name = "hong";
var obj = {
    name: "ming",
    // a() {
    //     return this.name;
    // }
    a: () => {
        return this.name;
    }
}
console.log(obj.a());
console.log((obj.a)());
let b = obj.a;
console.log(b());

