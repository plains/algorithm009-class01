// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。
// 示例:
// 输入: nums = [1,2,3]
// 输出:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 
 * 解法：递归
 * 子集中一定有个 []
 * 所以默认结果: result = [[]]
 * 这个解法没有用到分治，回溯，数学归纳法，我还没想明白。
 * result = [[]]
 * result = [[], [1]]
 * result = [[], [1], [2]]
 * result = [[], [1], [2], [1, 2]]
 * result = [[], [1], [2], [1, 2], [3]]
 * result = [[], [1], [2], [1, 2], [3], [3, 1]]
 * result = [[], [1], [2], [1, 2], [3], [3, 1], [3, 2]]
 * result = [[], [1], [2], [1, 2], [3], [3, 1], [3, 2], [3, 1, 2]]
 * 在代码中:
 * result = [[]]
 * loop n = 0; n < nums.length
 *      loop (i = 0; i < result.length)
 *          result.push[nums[n], ...result[i]] 
 * return result
 * 时间复杂度：O(N * 2^N)
 * 空间复杂度：O(N * 2^N)
 * 每一次选择一个元素，可能加也可能不加，这是啥意思呢？
 */
var subsets = function (nums) {
    let result = [
        []
    ]

    for (let n = 0; n < nums.length; n++) {
        let rLen = result.length
        for (let j = 0; j < rLen; j++) {
            result.push([nums[n], ...result[j]])
        }
    }

    return result
};


/**
 * 回溯
 * loop n = 0; n < nums.length
 */