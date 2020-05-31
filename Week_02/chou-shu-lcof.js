// 我们把只包含因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
// 示例:
// 输入: n = 10
// 输出: 12
// 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
// 说明:  
// 1 是丑数。
// n 不超过1690。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/chou-shu-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    if (n == 1) {
        return 1
    }
    let a = 0,
        b = 0,
        c = 0
    let temp = [1]
    for (let i = 1; i < n; i++) {
        temp[i] = Math.min(temp[a] * 2, temp[b] * 3, temp[c] * 5)
        temp[i] >= temp[a] * 2 ? a++ : 0
        temp[i] >= temp[b] * 3 ? b++ : 0
        temp[i] >= temp[c] * 5 ? c++ : 0
    }
    return temp[temp.length - 1]
};