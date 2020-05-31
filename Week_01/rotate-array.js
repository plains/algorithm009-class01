// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入: [-1,-100,3,99] 和 k = 2
// 输出: [3,99,-1,-100]
// 解释: 
// 向右旋转 1 步: [99,-1,-100,3]
// 向右旋转 2 步: [3,99,-1,-100]
// 说明:

// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // if k > nums.length, k mod nums.length
    // reverse all num
    // reverse 0 ~ k-1
    // reverse k ~ nums.length - 1
    k = k > nums.length ? k % nums.length : k
    _reverse(nums, 0, nums.length - 1)
    _reverse(nums, 0, k - 1)
    _reverse(nums, k, nums.length - 1)

    function _reverse(nums, start, end) {
        while (start < end) {
            let t = nums[start]
            nums[start] = nums[end]
            nums[end] = t
            start++
            end--
        }
    }
};

var rotate2 = function (nums, k) {
    // new array
    // [1,2,3,4,5,6,7] k=3
    k = k > nums.length ? k % nums.length : k
    let nArr = []
    for (let i = 0; i < nums.length; i++) {
        nArr[(k + i) % nums.length] = nums[i]
    }
    for (let i = 0; i < nArr.length; i++) {
        nums[i] = nArr[i]
    }
}