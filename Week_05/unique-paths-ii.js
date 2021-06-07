// 63. 不同路径 II
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

// 网格中的障碍物和空位置分别用 1 和 0 来表示。
// 说明：m 和 n 的值均不超过 100。
// 示例 1:
// 输入:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// 输出: 2
// 解释:
// 3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右
// https://leetcode-cn.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    // [
    //   [0,0,0],
    //   [0,1,0],
    //   [0,0,0]
    // ]
    /**
     * base case: 终点上方和左边的格子都只有一种路径
     * 状态转移方程：step[m,n] = step[m-1][n] + step[m][n-1]
     * dp 的定义：dp[i]
     * 在遍历时将终点与起点位置互换更容易一些
     */
    let dp = []
    let n = obstacleGrid.length
    let m = obstacleGrid[0].length
    dp[0] = obstacleGrid[0][0] === 1 ? 0 : 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0
            } else if (j > 0) { // 略过第一个
                dp[j] = (dp[j] || 0) + dp[j - 1]
            }
        }
    }
    return dp[m - 1]
};

console.log(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]))
console.log(uniquePathsWithObstacles([
    [1]
]))
console.log(uniquePathsWithObstacles([
    [0]
]))