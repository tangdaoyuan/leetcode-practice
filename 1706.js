// https://leetcode-cn.com/problems/where-will-the-ball-fall/
/**
 * 球会落何处
 * 
 * @param {number[][]} grid
 * @return {number[]}
 */
 var findBall = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const _rets = []
  for (let i = 0; i< n; i++) {
      let step = 0;
      let bias = i;
      while (step < m) {
          if (grid[step][bias] === 1) {
              if (bias === n - 1) {
                  _rets.push(-1);
                  break;
              } else if (grid[step][bias+1] === -1) {
                  _rets.push(-1);
                  break;
              } else {
                  step++;
                  bias++;
              }
          } else if (grid[step][bias] === -1) {
              if (bias === 0) {
                  _rets.push(-1);
                  break;
              } else if (grid[step][bias-1] === 1) {
                  _rets.push(-1);
                  break;
              } else {
                  step++
                  bias--;
              }
          }
          if (step === m) {
              _rets.push(bias);
          }
      }
  }
  return _rets;
};