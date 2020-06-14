// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 示例:
// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/permutations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 解法：dfs
 * 将 nums 预解析成下面的格式
 * 1:2,3
 * 2:1,3
 * 3:1,2
 * 
 * 以 1 举例： 最大递归深度 3，以 1 为根，左右节点不是 2，就是 3，合法条件，子节点不可以和父节点相同
 */
var permute = function (nums) {
    if (nums === null) return []
    let res = []
    _gen([], 0)
    return res

    function _gen(arr, level) {
        if (level >= nums.length) {
            res.push(arr)
            return
        }
        nums.forEach(item => {
            if (arr.indexOf(item) === -1) {
                let narr = arr.concat()
                narr.push(item)
                _gen(narr, level + 1)
            }
        });
    }
};