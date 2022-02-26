// https://leetcode-cn.com/problems/maximum-difference-between-increasing-elements/

/**
 * 增量元素之间的最大差值
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let i = -1;
    let j = -1;
    let min = Infinity;
    let val = -1;
    nums.forEach((num, ind) => {     
        if (num <= min) {
            min = num;
        } else {
            val = Math.max(val, num - min)
        }
    })
    return val;
};