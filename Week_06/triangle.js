// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
// 例如，给定三角形：
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
// 说明：
// 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/triangle
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function (triangle) {
    // base case: 最底下一层的的路径都等于自身的值
    // dp[i][j]: 该坐标的最小路径
    // dp[i][j] = min(dp[i+1][j], dp[i+1][j+1]) + a[i][j]
    let dp = []
    // init base case
    let len = triangle.length
    for (let i = 0; i < triangle[len - 1].length; i++) {
        dp[i] = triangle[len - 1][i]
    }
    for (let i = len - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }
    return dp[0]
};

console.log(minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]))