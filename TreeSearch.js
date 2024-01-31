// 2、二叉搜索树
// 输入一个二叉树的根节点，实现一个迭代器，调用迭代器的next()方法，将返回二叉树中下一个最小的数；调用迭代器的hasNext()方法，将返回是否存在下一个数。
// 例：
// var ts = new TreeSearch(root);
// ts.next(); // 返回 3
// ts.next(); // 返回 7
// ts.hasNext(); // 返回 true
// ts.next(); // 返回 9
// ts.hasNext(); // 返回 true
// ts.next(); // 返回 15
// ts.hasNext(); // 返回 true
// ts.next(); // 返回 20
// ts.hasNext(); // 返回 false
// 填入答案：
/**
二叉树对象的定义如下
function TreeNode(val) {
this.val = val;
this.left = this.right = null;
}
*/
/**
@param {TreeNode} root
*/
var TreeSearch = function (root) {
  this.stack = []
  this.pushLeft(root)
}
/**
@return 下一个最小的数
@return {number}
*/
TreeSearch.prototype.next = function () {
  let node = this.stack.pop()
  if (node.right) {
    this.pushLeft(node.right)
  }
  return node.val
}
/**
@return 是否存在下一个最小的数
@return {boolean}
*/
TreeSearch.prototype.hasNext = function () {
  return this.stack.length > 0
}

TreeSearch.prototype.pushLeft = function (root) {
  while (root) {
    this.stack.push(root)
    root = root.left
  }
}
