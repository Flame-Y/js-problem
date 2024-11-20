var getName = function () { console.log(1);}
function Foo() {
    getName = function () { console.log(2);}
    return this;
}
Foo.getName = function () { console.log(3);}
Foo.prototype.getName = function () { console.log(4);}

getName();
Foo().getName;
Foo.getName();
getName(); 
(new Foo.getName());
(new Foo()).getName();
