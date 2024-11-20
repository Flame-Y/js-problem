// 实现一个泛型函数，接受一个数组并返回该数组的第一个元素
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}
const numbers = [1, 2, 3];

const firstNumber = getFirstElement(numbers);
console.log(firstNumber);

const strings = ['a', 'b', 'c'];
const firstString = getFirstElement(strings); 
console.log(firstString);

const emptyArray: number[] = [];
const firstEmpty = getFirstElement(emptyArray); 
console.log(firstEmpty);