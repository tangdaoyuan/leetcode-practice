// https://leetcode-cn.com/problems/longest-word-in-dictionary/
/**
 * 词典中最长的单词
 * 
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {

    words.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        } else {
            return b.localeCompare(a);
        }
    })

    const condidates = new Set();
    let longestStr = ''
    condidates.add('');
    words.forEach(word => {
        if (condidates.has(word.slice(0, -1))) {
            longestStr = word;
            condidates.add(word);
        }
    })
    return longestStr;
};
