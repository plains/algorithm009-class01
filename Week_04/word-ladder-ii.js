/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
/**
 * 题解
 * 参考题解：https://leetcode.com/problems/word-ladder-ii/discuss/625830/JavaScript-BFS
 */
var findLadders = function (beginWord, endWord, wordList) {
    const CHAR_CODE_A = 97;
    const wordSet = new Set(wordList)

    if (!wordSet.has(endWord)) return []
    let graph = createGraph([beginWord].concat(wordList), wordSet)

    let queue = [
        [beginWord]
    ]
    let level = 0
    let isMinLevel = false
    let res = []
    let visited = new Set()

    while (queue.length > 0 && !isMinLevel) {
        let queueLen = queue.length
        for (let i = 0; i < queueLen; i++) {
            let words = queue.shift()
            let lastWord = words[words.length - 1]
            if (lastWord === endWord) {
                // push Result
                res.push(words)
                isMinLevel = true
                continue
            }
            /**
             * 标记已经被使用过的词
             */
            visited.add(lastWord)
            for (let [siblings, _] of graph[lastWord].entries()) {
                if (!visited.has(siblings)) {
                    queue.push([...words, siblings])
                }
            }
        }
        level++
    }

    return res

    function createGraph(allWords, wordSet) {
        const graph = {}

        for (const word of allWords) {
            if (!(word in graph)) graph[word] = new Set()

            for (let iChar = 0; iChar < word.length; iChar++) {
                const char = word[iChar]

                for (let codePoint = CHAR_CODE_A; codePoint < CHAR_CODE_A + 26; codePoint++) {
                    const newChar = String.fromCharCode(codePoint)
                    if (newChar === char) continue

                    const newWord = `${word.slice(0, iChar)}${newChar}${word.slice(iChar + 1)}`
                    if (!wordSet.has(newWord)) continue

                    if (!(newWord in graph)) graph[newWord] = new Set()
                    graph[word].add(newWord)
                    graph[newWord].add(word)
                }
            }
        }

        return graph;
    }
}