// 题目描述
// 请求后端接口，按要求获取数据
// 现有一个 POST 接口:https://xxx.com/students，每次请求只能返回 10 个学生的课程成绩 如下
// [
//     {name:'张三',score: 99,time:'2021-12-22'},
//     {name:'李四',score: 60,time:'2021-12-12'},
//     {name:'王五',score:77,time:'2021-11-08'},
//     ...
// ]
// 该接口有一定概率请求失败 不可忽略:Response Status Code500，Body 为空

// 要求:
// 实现一个函数，总共需获得 100个成绩大于90分，且时间在2021年12月3日之后的学生的课程成绩，并按各自成绩从大到小排列返回(可直接使用 fetch 或 axios)

// 提示:
// 浏览器最多可以有6个并行的网络请求
// 尽可能在更短的时间内，运行完成得到结果
// 接口成功的时候累加数据，接口失败的时候忽略

async function fetchStudentPage(page) {
    const url = 'https://xxx.com/students';
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ page })
        });
        if (res.status === 500) {
            throw new Error('Server error');
        }
        const data = await res.json();
        return data;
    } catch (e) {
        console.error(e);
        return fetchStudentPage(page); // 失败重试
    }
}

async function getStudents() {
    const students = [];
    let page = 1;

    while (students.length < 100) {
        const tasks = [];
        for (let i = 0; i < 10; i++) {
            tasks.push(fetchStudentPage(page++));
        }
        const results = await Promise.all(tasks); // 并行请求
        let filteredStudents = []
        results.forEach(data => filteredStudents.push(...data));

        filteredStudents = filteredStudents.filter(item => {
            return item.score > 90 && new Date(item.time) > new Date('2021-12-03'); // 按要求筛选
        });

        if (filteredStudents.length >= 100) {
            return filteredStudents.slice(0, 100);
        }
    }

    return students.sort((a, b) => b.score - a.score); // 按成绩排序
}