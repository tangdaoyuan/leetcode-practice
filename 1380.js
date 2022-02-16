// https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const rets = [];
  const columnMinMap = {}
  matrix.forEach(row => {
    const min = Math.min(...row);
    for (let i = 0; i< row.length; i++) {
      if (row[i] === min) {
        // 避免同列重复计算
        if (!columnMinMap[i]) {
          columnMinMap[i] = Math.max(...matrix.map(m => m[i]));
        }
        if (min === columnMinMap[i]) {
          rets.push(min);
        }
      }
    }
  })
  return rets;
};