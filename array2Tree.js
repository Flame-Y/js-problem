function arrayToTree(data, pid = 0) {
  let res = []
  getChildren(data, res, pid)
  return res
}

function getChildren(data, res, pid) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].pid === pid) {
      let obj = {
        id: data[i].id,
        name: data[i].name,
        children: []
      }
      res.push(obj)
      getChildren(data, obj.children, obj.id)
    }
  }
}

const data = [
  { id: 2, name: "中国", pid: 0 },
  { id: 3, name: "广东省", pid: 2 },
  { id: 4, name: "广州市", pid: 3 },
  { id: 5, name: "天河区", pid: 4 },
  { id: 6, name: "湖南省", pid: 2 },
  { id: 1, name: "俄罗斯", pid: 0 }
]

console.log(arrayToTree(data, 0))
