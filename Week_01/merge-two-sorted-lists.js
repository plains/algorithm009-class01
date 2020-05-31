/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = null
    let node = null
    while(l1 !== null || l2 !== null) {
        let val
        if (l1 !== null && l1.val <= l2.val) {
            val = l1.val
            l1 = l1.next
        } else {
            val = l2.val
            l2 = l2.next
        }

        if (node === null) {
            node = new ListNode(val)
            head = node
        } else {
            node.next = new ListNode(val)
            node = node.next
        }
    }

    return head
};


var mergeTwoLists2 = function(l1, l2) {
    /**
     * 终止条件：当 node.next 为 null 时
     * 最小子问题：两个节点比大小，小的节点先入，小节点的 next 再和大节点相比，递归...
     */
    if (l1 === null) return l2
    if (l2 === null) return l1
    if (l1.val <= l2.val) {
        // list.next = l1
        l1.next = mergeTwoLists2(l1.next, l2)
        return l1
    } else {
        // list.next = l2
        l2.next = mergeTwoLists2(l1, l2.next)
        return l2
    }
}