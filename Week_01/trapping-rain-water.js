// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。
// 示例:
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/trapping-rain-water
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    /**
     * 题解：求每一列的水容量
     * loop，求当前列的左右最高的柱子，取最小边减去当前列高度，等于容水量
     * 边界：最左和最右列不可能容水，跳过
     */
    let res = 0
    for (let i = 1; i < height.length - 1; i++) {
        let h = _getMin(height, i) - height[i]
        res += h > 0 ? h : 0
    }
    return res

    function _getMin(height, mid) {
        let L = 0,
            R = height.length - 1,
            maxL = 0,
            maxR = 0
        while (L < mid || R > mid) {
            if (L < mid) {
                maxL = Math.max(maxL, height[L])
                L++
            }
            if (R > mid) {
                maxR = Math.max(maxR, height[R])
                R--
            }
        }
        return Math.min(maxL, maxR)
    }
};



var trap = function (height) {
    /**
     * 题解：求每一列的水容量 + 动态规划
     * 
     * loop，求当前列的左右最高的柱子，取最小边减去当前列高度，等于容水量
     * 边界：最左和最右列不可能容水，跳过
     */
    let res = 0,
        maxLeft = [],
        maxRight = []
    for (let j = 1; j < height.length - 1; j++) {
        maxLeft[j] = Math.max(maxLeft[j - 1] || 0, height[j - 1])
    }
    for (let k = height.length - 2; k >= 0; k--) {
        maxRight[k] = Math.max(maxRight[k + 1] || 0, height[k + 1])
    }
    for (let i = 1; i < height.length - 1; i++) {
        let min = Math.min(maxLeft[i], maxRight[i])
        if (min > height[i]) res += min - height[i]
    }

    return res
};



var trap = function (height) {
    /**
     * 题解：求每一列的水容量 + 动态规划
     * 
     * loop，求当前列的左右最高的柱子，取最小边减去当前列高度，等于容水量
     * 边界：最左和最右列不可能容水，跳过
     */
    let res = 0,
        maxLeft,
        maxRight

    // for (let k = height.length - 2; k >= 0; k--) {
    //     maxRight[k] = Math.max(maxRight[k + 1] || 0, height[k + 1])
    // }
    let R = height.length - 2
    for (let i = 1; i < height.length - 1; i++) {
        maxRight = Math.max(maxRight || 0, height[R + 1])
        maxLeft = Math.max(maxLeft || 0, height[i - 1])
        let min = Math.min(maxLeft, maxRight)
        if (min > height[i]) res += min - height[i]
        R--
    }

    return res
};