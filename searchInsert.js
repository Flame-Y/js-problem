// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
// 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 示例 1:
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

// 示例 2:
// 输入: nums = [1,3,5,6], target = 2
// 输出: 1

// 示例 3:
// 输入: nums = [1,3,5,6], target = 7
// 输出: 4

/**
 * @param {number[]} nums (nums 为 无重复元素 的 升序 排列数组)
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1) return nums.indexOf(target)
  const n = nums.length
  let l = 0,
    r = n - 1
  while (l < r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] < target) l = mid + 1
    else r = mid
  }
  return l
}
console.log(searchInsert([1, 3, 5, 6], 7))
