// https://leetcode-cn.com/problems/knight-probability-in-chessboard/
/**
 * dfs + 记忆搜索 （本来应该用动态规划）
 * 
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {

  const array = new Array(n).fill(0).map(col => new Array(n).fill(0).map(s => new Array(k).fill(0)))

  const bias = [[-1, -2], [-2, -1], [1, -2], [2, -1], [1, 2], [2, 1], [-1, 2], [-2, 1]]
  function dfs(n, k, row, column, step) {
    if (step === k) {
      array[row][column][step] = 1 / Math.pow(8, step);
      return 1 / Math.pow(8, step)
    }

    if (array[row][column][step] !== 0) {
      return array[row][column][step];
    }
    let rate = 0;
    bias.forEach(b => {
      if (!isOutSide(row + b[0], column + b[1], n)) {
        rate += dfs(n, k, row + b[0], column + b[1], step + 1)
      }
    })
    array[row][column][step] = rate;

    return rate;
  }

  function isOutSide(row, column, n) {
    if ((row < 0 || column < 0) || (row > n - 1 || column > n - 1)) {
      return true;
    }
    return false;
  }

  const rate = dfs(n, k, row, column, 0);
  return rate;
};

