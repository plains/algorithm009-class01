// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。
//  
// 示例 1:
// 输入:
// 11110
// 11010
// 11000
// 00000
// 输出: 1
// 示例 2:
// 输入:
// 11000
// 11000
// 00100
// 00011
// 输出: 3
// 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-islands
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {character[][]} grid
 * @return {number}
 */
/**
 * 题解：dfs
 * 扫描二维数组，当发现岛屿 1 时，将它标记为 0，岛屿数量 +1
 * 最重要的是，将这个遍历这个岛屿的上下左右看看有没有相连的，只要有一个方向相连，就重复这个过程，并将找到的岛屿标记为 1
 */
// [
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ]
var numIslands = function (grid) {
    if (grid === null) return 0
    let rows = grid.length
    let count = 0
    if (rows < 1) return 0
    let cols = grid[0].length

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++
                // clear round
                dfsClear(i, j, grid)
            }
        }
    }

    return count

    function dfsClear(i, j, grid) {
        // not in map
        if (i >= rows || j >= cols || i < 0 || j < 0 || grid[i][j] === '0') return
        grid[i][j] = '0'
        dfsClear(i - 1, j, grid)
        dfsClear(i + 1, j, grid)
        dfsClear(i, j - 1, grid)
        dfsClear(i, j + 1, grid)
    }
};