/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    /**
     * dp[i]: 以第 i 个数字为结尾的组合的最大值
     * dp[i]=max(dp[i-1]+a[i], a[i]); 每一步可以选择加入前一个的组合或者不加，谁大选谁
     * base case dp[0]=a[0]; 
     */
    let prev = nums[0]
    let maxValue = nums[0]
    for (let i = 1; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i])
        maxValue = Math.max(prev, maxValue)
    }
    return maxValue
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSubArray([-1, -2]))