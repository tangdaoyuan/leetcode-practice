// https://leetcode-cn.com/problems/optimal-division/submissions/
/**
 * 最优除法
 * 
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  return getMaxValue(nums);
};

function getMinValue(sequence) {
  return `(${sequence.join("/")})`;
}

function getMaxValue(sequence) {
  if (sequence.length === 1) {
    return `${sequence[0]}`;
  }
  if (sequence.length === 2) {
    return `${sequence[0]}/${sequence[1]}`;
  }
  return `${sequence[0]}/${getMinValue(sequence.slice(1, sequence.length))}`;
}
