// 给定一个二叉树，返回它的 前序 遍历。
//  示例:
// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 
// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-tree-preorder-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = []
    _recur(root)
    return res

    function _recur(root) {
        if (root === null) return
        res.push(root.val)
        _recur(root.left)
        _recur(root.right)
    }
};