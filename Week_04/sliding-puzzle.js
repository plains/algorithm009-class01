/**
 * @param {number[][]} board
 * @return {number}
 */
/**
 * 滑动窗口，找到最少步骤数
 * 如何暴力破解？
 * 暴力寻找 0 的上下左右
 * 如何算到达目标？
 * 当结果为 [[1,2,4],[4,5,0]]
 * 对二维数组进行移动和比对结果太麻烦，该题有个技巧是将二维数组转化为一维
 * 转化后，需要解决 0 在二维数组中任意位置的上下左右分别是谁？提前建立一个 map
 * 题解参考：https://labuladong.gitbook.io/algo/gao-pin-mian-shi-xi-lie/bfs-jie-jue-hua-dong-pin-tu
 * 
 */
var slidingPuzzle = function (board) {
    // let m = 3
    // let n = 2
    // let zeroPosMap = {}
    // // 用程序生成 0 在所有位置时的上下左右映射关系
    // for (let i = 0; i < board.length; i++) {
    //     for (let j = 0; j < m; j++) {
    //         let list = []
    //         board[i - 1] && board[i - 1][j] !== undefined && list.push(j + (i - 1) * m)
    //         board[i + 1] && board[i + 1][j] !== undefined && list.push(j + (i + 1) * m)
    //         board[i][j - 1] !== undefined && list.push((j - 1) + i * m)
    //         board[i][j + 1] !== undefined && list.push((j + 1) + i * m)
    //         zeroPosMap[i * m + j] = list
    //     }
    // }
    let zeroPosMap = {
        '0': [3, 1],
        '1': [4, 0, 2],
        '2': [5, 1],
        '3': [0, 4],
        '4': [1, 3, 5],
        '5': [2, 4]
    }
    let visited = new Set()
    let target = '123450'
    let step = 0
    let queue = [stringifyBoard(board)]
    while (queue.length > 0) {
        let qLength = queue.length
        while (qLength--) {
            let cur = queue.shift()
            if (cur === target) {
                return step
            }
            let zeroIdx = cur.indexOf('0')
            zeroPosMap[zeroIdx].forEach(moveIdx => {
                let newCur = cur
                newCur = newCur.split('')
                newCur[zeroIdx] = cur[moveIdx]
                newCur[moveIdx] = '0'
                newCur = newCur.join('')
                if (!visited.has(newCur)) {
                    queue.push(newCur)
                    visited.add(newCur)
                }
            })
        }
        step++
    }
    return -1

    function stringifyBoard(board) {
        let str = "";
        for (let row of board) {
            for (let col of row) {
                str += col;
            }
        }
        return str;
    }
};

// test
// console.log(slidingPuzzle([
//     [1, 2, 3],
//     [4, 0, 5]
// ]))