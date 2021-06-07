/**
 * base case: 对 works 按开始时间升序，第一个工作的左边将没有工作可以选
 * opt 定义：opt[i] = 当前这一份工作能够赚到的最多的佣金
 * prev 定义：prev[i] = 时间上离当前这一份 work 最近的一份可以做的 work
 * 方程: opt[i] = max(opt[i] = works[i].coin + prev[i].coin, opt[i-1])
 * 学习链接：https://www.bilibili.com/video/BV18x411V7fm?from=search&seid=12034355081224283217
 */
function greatWork(works) {
    let opt = [works[0].coin]
    let prev = {}
    for (let i = 0; i < works.length; i++) {
        prev[i] = -1
        let j = i
        while (j--) {
            if (works[j].end < works[i].start) {
                prev[i] = j
                break;
            }
        }
    }
    let res = -1
    for (let i = 1; i < works.length; i++) {
        opt[i] = Math.max(works[i].coin + (prev[i] === -1 ? 0 : opt[prev[i]]), opt[i - 1])
        res = Math.max(opt[i], res)
    }
    return res
}

let works = [{
        coin: 5,
        start: 1,
        end: 3
    },
    {
        coin: 1,
        start: 3,
        end: 4
    },
    {
        coin: 8,
        start: 0,
        end: 5
    },
    {
        coin: 4,
        start: 4,
        end: 6
    },
    {
        coin: 6,
        start: 3,
        end: 7
    },
    {
        coin: 3,
        start: 5,
        end: 8
    },
    {
        coin: 2,
        start: 6,
        end: 9
    },
    {
        coin: 4,
        start: 8,
        end: 10
    }
];
console.log(greatWork(works));