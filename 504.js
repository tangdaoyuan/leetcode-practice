// https://leetcode-cn.com/problems/base-7/
/**
 * 七进制数
 * 
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) {
    return "0";
  }
  const bits = [];
  let _num = Math.abs(num);
  while (_num / 7 !== 0) {
    bits.unshift(_num % 7);
    _num = Math.floor(_num / 7);
  }
  return `${num >= 0 ? "" : "-"}${bits.join("")}`;
};
