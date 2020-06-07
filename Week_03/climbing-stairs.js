/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // 不是加 1 就是加 2
    // 傻递归，时间超时了
    let cnt = 0
    let cmap = {}
    _count(0, 0)
    return cnt

    function _count(num, step) {
        num += step

        if (num > n) return
        if (num === n) {
            cnt++
            return
        }

        _count(num, 1)
        _count(num, 2)
    }
};

var climbStairs = function (n) {
    /**
     * 动态规划
     * 爬到某一个台阶一定是从 n - 1 爬 1 阶，或者 n - 2 爬 2 阶上来的
     * dp[n] = dp[n-1] + dp[n-2]
     */
    let dp = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}