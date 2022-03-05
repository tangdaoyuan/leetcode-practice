// https://leetcode-cn.com/problems/find-good-days-to-rob-the-bank/
/**
 * 适合打劫银行的日子
 * @param {*} security
 * @param {*} time
 * @returns
 */
var goodDaysToRobBank = function (security, time) {
  const n = security.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (security[i] <= security[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
    if (security[n - i - 1] <= security[n - i]) {
      right[n - i - 1] = right[n - i] + 1;
    }
  }

  const ans = [];
  for (let i = time; i < n - time; i++) {
    if (left[i] >= time && right[i] >= time) {
      ans.push(i);
    }
  }
  return ans;
};
