// 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
// 示例 1:
// 输入: 2.00000, 10
// 输出: 1024.00000
// 示例 2:
// 输入: 2.10000, 3
// 输出: 9.26100
// 示例 3:
// 输入: 2.00000, -2
// 输出: 0.25000
// 解释: 2-2 = 1/22 = 1/4 = 0.25
// 说明:
// -100.0 < x < 100.0
// n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/powx-n
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

/**
 * splitProblem
 *  subProblem: LogN
 *      2^10 = 2^5 * 2^5
 *      2^5 = 2^2 * 2^2 * 2
 *      2^2 = 2 * 2
 *      if x === 0 return x  // 0 的任意次幂都是 0
 *      if n === 1 return x  // 1 次幂等于基数
 *      if n === 0 return x > 0 ? 1 : -1  // 正数的 0 次幂都是 1，负数的 0 次幂都是 -1
 *      if n < 0 n = Math.abs(n)
 *      
 *      half = myPow(x, Math.ceil(n / 2))
 *      
 *      if n % 2 == 1
 *          half * half * x
 *      else 
 *          half * half
 */
var myPow = function (x, n) {
    return n < 0 ? 1 / _pow(x, n) : _pow(x, n)

    function _pow(x, n) {
        if (x === 0 || n === 1) return x
        if (n === 0) return x > 0 ? 1 : -1
        n = Math.abs(n)
        let half = _pow(x, Math.floor(n / 2))
        return n % 2 === 1 ? half * half * x : half * half
    }
};