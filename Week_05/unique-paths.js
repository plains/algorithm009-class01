/**
 * https://leetcode-cn.com/problems/unique-paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let memo = {}

    function dp(i, j) {
        let memoKey = [i, j].toString()
        // 边界，不能超出右边或下边
        if (i >= m) return 0
        if (j >= n) return 0
        // 达到目标
        if (i === m - 1 && j === n - 1) return 1
        // 利用备忘录，避免重复计算
        if (memo[memoKey]) return memo[memoKey]
        // 状态转移方程: dp(i + 1, j) + dp(i, j + 1)
        memo[memoKey] = dp(i + 1, j) + dp(i, j + 1)
        return memo[memoKey]
    }
    return dp(0, 0)
};



var uniquePaths = function (m, n) {
    /**
     * dp: dp[i][j] = 走法数量
     * 转移方程：dp[i][j] = dp[i+1, j] + dp[i, j+1]
     * base case: dp[m-1][0...n-1]=1 dp[0...m-1][n-1]=1
     * 
     */
    let dp = []
    dp[m - 1] = []
    for (let i = 0; i < n; i++) dp[m - 1][i] = 1
    for (let i = 0; i < m; i++) dp[i] = dp[i] || [], dp[i][n - 1] = 1
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
        }
    }
    return dp[0][0]
}