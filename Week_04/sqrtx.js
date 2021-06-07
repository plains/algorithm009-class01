/**
 * @param {number} x
 * @return {number}
 */
/**
 * y = x^2 (x > 0: 抛物线，在 y 轴右侧单调递增)
 * 
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x

    let left = 1
    let right = x
    let mid

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (mid * mid > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
        console.log('left', left, 'mid', mid, 'right', right)
    }
    return right
};
console.log(mySqrt(3))