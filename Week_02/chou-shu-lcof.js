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
    /**
     * 2    3    5    4   6   10
     * 2*1 3*1, 5*1, 2*2 3*2, 5*2, 2*3, 3*3, 5*3, 
     */
    /**
     * 题解：
     * 质因子/质因数: 就是一个积的两个乘数
     * 丑数的定义：一个积的的质因子只包含 2,3,5, 怎么理解呢？
     * 举三个例子：
     * 4 = 2*2, 由 2 和 2 两个丑数组成，所以 4 是丑数
     * 8 = 4*2 = 2*2*2, 由 2 和 4 两个丑数组成，所以 8 是丑数
     * 14 = 2*7, 其中 7 不是丑数，所以 14 也就不是丑数
     * 总结：丑数的最小质因子只能是 2, 3, 5; 那么往后推丑数, 一定是丑数*丑数得来的
     * 按题目要求，生成的丑数顺序是升序，所以每次要取最小的组合
     */
    let cs = [1]
    let [n1, n2, n3] = [2, 3, 5]
    let [i1, i2, i3] = [0, 0, 0]
    for (let i = 1; i < n; i++) {
        let lastI = cs.push(Math.min(cs[i1] * n1, cs[i2] * n2, cs[i3] * n3))
        lastI--
        if (cs[lastI] === cs[i1] * n1) i1++
        if (cs[lastI] === cs[i2] * n2) i2++
        if (cs[lastI] === cs[i3] * n3) i3++
    }
    return cs[n - 1]
};