// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
// 示例 1:
// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
// 示例 2:

// 输入: [4,3,2,1]
// 输出: [4,3,2,2]
// 解释: 输入数组表示数字 4321。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/plus-one
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    /**
     * loop 倒序
     * 当前位小于 9，加一，返回
     * 遇到 9 当前位为 0，继续判断下一位
     * 如果到了第 0 位，还是 9，则初始化一个长度+1 的数字，第 0 位为 1
     */
    let len = digits.length
    while(len--) {
        if (digits[len] < 9) {
            digits[len]++
            return digits
        }
        digits[len] = 0
    }
    digits.unshift(1)
    return digits
};
