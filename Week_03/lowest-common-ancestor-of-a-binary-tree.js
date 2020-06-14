// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
// 例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
// 示例 1:
// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出: 3
// 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
// 示例 2:
// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// 输出: 5
// 解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
//  
// 说明:
// 所有节点的值都是唯一的。
// p、q 为不同节点且均存在于给定的二叉树中。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/**
 * 现在我有一个函数，接受一个根节点，和两个指定节点，要找到这两个节点距离最近的共同祖先
 * 怎么样判断是最近的呢？
 * 利用后序遍历，从叶子节点向上遍历，从左向右，去寻找 q,p 相同的父节点
 * base case:
 * 1. p,q 一定存在于树中，且 p,q 一定是不同节点
 * 2. 在递归中，如果 p,q 存在于当前 root 中，那么返回 root （后序遍历的特性）
 * 3. 在递归中，如果 p,q 都不存在当前 root 中，那么返回 null
 * 4. 在递归中，如果 p 或 q 存在一个在 root 中，那么返回当前节点
 * 
 * 还有吗？？？
 */
var lowestCommonAncestor = function (root, p, q) {
    let rst = false;
    return _lowestCommonAncestor(root, p, q)

    function _lowestCommonAncestor(root, p, q) {
        if (root === null) return null
        if (rst) return null
        if (root === p) return p
        if (root === q) return q

        let left = _lowestCommonAncestor(root.left, p, q)
        let right = _lowestCommonAncestor(root.right, p, q)

        if (left && right) {
            rst = root
            return root
        }
        if (left === null && right === null) return null
        return left ? left : right
    };
}


var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return null
    if (root === p) return p
    if (root === q) return q

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if (left && right) return root
    if (left === null && right === null) return null
    return left ? left : right
}