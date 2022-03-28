// https://leetcode-cn.com/problems/binary-number-with-alternating-bits/g
/**
 * 交替位二进制数
 *
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let flag = +!(n - ((n >> 1) << 1));
  while (n > 0) {
    if ((n - ((n >> 1) << 1)) ^ (flag === 0)) {
      return false;
    }
    n = n >> 1;
    flag = +!flag;
  }
  return true;
};
