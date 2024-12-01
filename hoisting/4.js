var getName = function () { console.log(1);}
function Foo() {
    getName = function () { console.log(2);}
    return this;
}
Foo.getName = function () { console.log(3);}
Foo.prototype.getName = function () { console.log(4);}

getName(); // 1
Foo().getName(); // 2 node环境会报错
Foo.getName(); // 3
getName(); // 2
(new Foo.getName()); // 3
(new Foo()).getName(); // 4
