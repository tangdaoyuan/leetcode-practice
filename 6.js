// https://leetcode-cn.com/problems/zigzag-conversion/

/**
 * z形变换
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const queue = new Array(numRows).fill(0).map(() => []);
  let cursor = 0;
  let reverse = false;
  for (let i = 0; i < s.length; i++) {
    queue[cursor].push(s[i]);
    if (!reverse) {
      if (cursor === queue.length - 1) {
        reverse = true;
        if (cursor > 0) {
          cursor--;
        }
      } else {
        cursor++;
      }
    } else {
      if (cursor === 0) {
        reverse = false;
        if (cursor < queue.length - 1) {
          cursor++;
        }
      } else {
        cursor--;
      }
    }
  }
  return queue.map((chars) => chars.join("")).join("");
};
