let jump = function (nums) {
    let end = 0
    let max = -1
    let step = 0
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i])
        if (i === end) {
            end = max
            step++
        }
    }
    return step
}