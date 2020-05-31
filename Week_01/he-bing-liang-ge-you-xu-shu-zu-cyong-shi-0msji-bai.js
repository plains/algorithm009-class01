/**
 * https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-cyong-shi-0msji-bai/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p = m + n
    while(n--){
        m--
        p--
        if (nums1[m] < nums2[n] || m < 0) {
            nums1[p] = nums2[n]
            m++
        } else {
            nums1[p] = nums1[m]
            n++
        }
    }
}
/**
 * 题解
 * 要点：在不使用额外空间，并且 o(m+n) 的时间复杂度
 * 倒着读取 nums1, nums2 的数字，找出大的，加入 nums1 的尾部
 * 要注意边界：n > m 的情况下，会超出 nums1 的左边界
 */