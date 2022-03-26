// https://leetcode-cn.com/problems/baseball-game/
/**
 * 棒球比赛
 *
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const ret = [];
  for (let op of ops) {
    if (op === "C") {
      ret.pop();
    } else if (op === "D") {
      const prev = ret.pop();
      ret.push(prev, prev * 2);
    } else if (op === "+") {
      const prev2 = ret.pop();
      const prev1 = ret.pop();
      ret.push(prev1, prev2, prev1 + prev2);
    } else {
      ret.push(+op);
    }
  }

  return ret.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
};
