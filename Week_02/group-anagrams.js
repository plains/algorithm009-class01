// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 示例:
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：
// 所有输入均为小写字母。
// 不考虑答案输出的顺序。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/group-anagrams
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    /**
     * 题解：排序法
     * loop, 当前字符串按 ascii 排序, 创建 hash 映射结果数组中与当前字符串关联的下标
     */
    let smap = {}
    let res = []
    for (let i = 0; i < strs.length; i++) {
        let sortStr = strs[i].split('').sort().join('')
        if (smap[sortStr] !== undefined) {
            res[smap[sortStr]].push(strs[i])
        } else {
            res.push([strs[i]])
            smap[sortStr] = res.length - 1
        }
    }
    return res
};