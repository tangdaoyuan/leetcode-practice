// https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/
/**
 * 比较野，不观察规律直接递归
 * 
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  if (bits.length === 1) {
    return true;
  }
  if (bits[bits.length - 2] === 0) {
    return true;
  }

  if (bits[bits.length - 2] === 1) {
    if (isTwoBits(bits, bits.length - 3)) {
      return false;
    }
  }


  return true;
};

function isTwoBits(bits, k) {
  if (k < 0) {
    return true;
  }
  let isPossible = false;
  if (bits[k] === 0) {
    isPossible = isTwoBits(bits, k - 1);
    if (isPossible) {
      return isPossible;
    }
  }
  if (k - 1 >= 0 && bits[k - 1] === 1) {
    isPossible = isTwoBits(bits, k - 2);
    if (isPossible) {
      return isPossible;
    }
  }
  return isPossible;
}