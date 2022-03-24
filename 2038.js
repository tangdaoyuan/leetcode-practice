// https://leetcode-cn.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
/**
 * 如果相邻两个颜色均相同则删除当前颜色
 *
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  let aFreq = 0;
  let bFreq = 0;
  const len = colors.length;

  for (let i = 0; i < len; i++) {
    if (i > 0 && i < len - 1) {
      if (colors[i - 1] === colors[i] && colors[i + 1] === colors[i]) {
        if (colors[i] === "A") {
          aFreq++;
        } else {
          bFreq++;
        }
      }
    }
  }
  return aFreq > bFreq;
};
