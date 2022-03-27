// https://leetcode-cn.com/problems/find-missing-observations/
/**
 * 找出缺失的观测数据 
 *
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const m = rolls.length;
  const sum = rolls.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);

  let restSum = (m + n) * mean - sum;

  if (restSum < n || restSum > n * 6) {
    return [];
  }

  const res = new Array(n).fill(1);

  restSum = restSum - n;

  for (let i = 0; i < n; i++) {
    if (restSum <= 0) {
      break;
    } else {
      const span = restSum % 5 === 0 ? 5 : restSum % 5;
      res[i] += span;
      restSum -= span;
    }
  }
  return res;
};
