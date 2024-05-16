let arr = [{ key: 'key1', value: 'value1' }, { key: 'key2', value: 'value2' }]
// 实现一个fn函数，使得fn(arr)返回{key1:value1,key2,value2}

function fn(arr) {
    return arr.reduce((obj, item) => {
        obj[item.key] = item.value;
        return obj;
    }, {});
}

console.log(fn(arr)); // 输出 {key1: "value1", key2: "value2"}