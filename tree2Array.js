function treeToArray(data) {
  let res = []
  const dfs = (tree) => {
    tree.forEach((item) => {
      res.push(item)
      if (item.children) {
        dfs(item.children)
        delete item.children
      }
    })
  }
  dfs(data)
  return res
}

const treeData = [
  {
    id: 2,
    title: "中国",
    parent_id: 0,
    children: [
      {
        id: 3,
        title: "广东省",
        parent_id: 2,
        children: [
          {
            id: 4,
            title: "广州市",
            parent_id: 3,
            children: [{ id: 5, title: "天河区", parent_id: 4 }]
          }
        ]
      },
      { id: 6, title: "湖南省", parent_id: 2 }
    ]
  },
  { id: 1, title: "俄罗斯", parent_id: 0 }
]

console.log(treeToArray(treeData))
