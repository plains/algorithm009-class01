// 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
// 例如，给定一个 3叉树 :
// 返回其层序遍历:
// [
//      [1],
//      [3,2,4],
//      [5,6]
// ]
// 说明:
// 树的深度不会超过 1000。
// 树的节点总数不会超过 5000。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    /**
     * 题解：利用层级
     * recursive, push index root.val, index++, loop children 
     */
    let res = []
    _recur(root, 0)
    return res

    function _recur(root, index) {
        if (root === null) return
        res[index] ? res[index].push(root.val) : [root.val]
        index++
        for (let i = 0; i < root.children.length; i++) {
            _recur(root.children[i], index)
        }
    }
};