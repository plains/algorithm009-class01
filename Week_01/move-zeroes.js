// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/move-zeroes
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 双指针
    // loop, i, j; j 表示遇到的第一个 0 的位置, i 向前移动找到非 0 值，与 i 交换，i++
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[j] !== 0) {
            j++
        } else if (nums[i] !== 0) {
            nums[j] = nums[i]
            nums[i] = 0
            j++
        }
    }
};