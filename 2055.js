// https://leetcode-cn.com/problems/plates-between-candles/
/**
 * 蜡烛之间的盘子
 * 
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const len = s.length;
  const cache = new Array(len).fill(0);
  const lefts = new Array(len).fill(0);
  const rights = new Array(len).fill(0);

  let count = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === "*") {
      count++;
    }
    cache[i] = count;
  }

  let index = -1;
  for (let i = 0; i < len; i++) {
    if (s[i] === "|") {
      index = i;
    }
    lefts[i] = index;
  }

  index = -1;
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === "|") {
      index = i;
    }
    rights[i] = index;
  }

  return queries.map((query) => {
    const left = rights[query[0]];
    const right = lefts[query[1]];
    if (left === -1 || right === -1 || left >= right) {
      return 0;
    }
    return cache[right] - cache[left];
  });
};
