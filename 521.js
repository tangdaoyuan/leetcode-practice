// https://leetcode-cn.com/problems/longest-uncommon-subsequence-i/
/**
 * 最长特殊序列 (脑筋急转弯)
 * 
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var findLUSlength = function(a, b) {
    return a !== b ? Math.max(a.length, b.length) : -1;
};