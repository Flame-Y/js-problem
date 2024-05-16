// 实现一个函数fn，使得fn(str)返回'Hello World'
let str = 'hello world'

function toUpper(str) {
    let arr = str.split(" ");
    let newArr = arr.map((s) => {
        return s[0] = s[0].toUpperCase() + s.slice(1);
    })
    return newArr.join(" ")
}

console.log(toUpper(str));