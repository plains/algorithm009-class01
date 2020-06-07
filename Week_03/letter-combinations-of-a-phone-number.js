// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// [示例图片]
// 示例:
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * N 叉树展开
 * 
 */
var letterCombinations = function (digits) {
    let keyboardMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    let result = []
    if (!digits) return result
    return _assembly(digits, 0, '')

    function _assembly(digits, level, str) {
        if (level >= digits.length) {
            result.push(str)
            return
        }
        let keys = keyboardMap[digits[level]]
        for (let i = 0; i < keys.length; i++) {
            _assembly(digits, level + 1, str + keys[i])
        }
    }
};

/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * 这个的时间复杂度该如何计算?
 */
var letterCombinations = function (digits) {
    if (!digits) {
        return []
    }
    var arrs = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    var paths = digits.split('')
    // 取出第一个 digit 对应的字母进入 result
    var result = [...arrs[paths.shift()]]
    var index;
    // 如果还有 digit
    while (paths.length !== 0) {
        // 取出这个 digit， 保证 while 的运行
        var current = paths.shift()
        // 其实 current 都是 0
        var toBeAppend = arrs[current]
        // 从 0 开始循环，每次递增当前 digit 对应的字母的个数
        for (index = 0; index < result.length; index += toBeAppend.length) {
            // 当循环到的当前元素，都加上新的字母
            result.splice(index, 1, ...toBeAppend.map(item => result[index] + (item)))
        }
    }
    return result
};