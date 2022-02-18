// https://leetcode-cn.com/problems/find-center-of-star-graph/
/**
 * 耻辱题
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1];
};