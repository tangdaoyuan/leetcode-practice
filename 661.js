// https://leetcode-cn.com/problems/image-smoother/
/**
 * 图形平滑器
 *
 * @param {number[][]} img
 * @return {number[][]}
 */

const directions = [
  [-1, -1],
  [-1, 0],
  [0, -1],
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
  [-1, 1],
  [1, -1],
];
var imageSmoother = function (img) {
  const m = img.length;
  const n = img[0].length;

  const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));

  function getSmoothScore(i, j) {
    let count = 0;
    let sum = 0;
    directions.forEach((cur) => {
      if (
        i + cur[0] >= 0 &&
        i + cur[0] < m &&
        j + cur[1] >= 0 &&
        j + cur[1] < n
      ) {
        count++;
        sum += img[i + cur[0]][j + cur[1]];
      }
    });
    return Math.floor(sum / count);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = getSmoothScore(i, j);
    }
  }

  return ans;
};
