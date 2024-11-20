window.name = "321";

// function A() {
//   this.name = "123";
// }
// A.prototype.getA = function () {
//   console.log(this);
//   return this.name;
// };
// const a = new A();
// const funcA = a.getA();
// funcA();

class A {
    constructor() {
      this.name = "123";
    }
    getA() {
      console.log(this);
      return this.name;
    }
  }
  
  const a = new A();
  a.getA();