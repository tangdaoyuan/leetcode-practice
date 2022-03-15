// https://leetcode-cn.com/problems/count-number-of-maximum-bitwise-or-subsets/
/**
 * 统计按位或能得到最大值的子集数目
 *
 * @param {number[]} nums
 * @return {number}
 */
 var countMaxOrSubsets = function(nums) {
    let max = 0;
    nums.forEach(num => {
        max = max | num;
    });


    let ans = 0;
    function dfs(nums, index, cur) {
        if (index === nums.length) {
            if (cur === max) {
                ans++;
            }
            return;
        }
        if (cur === max) {
            ans += Math.pow(2, nums.length - index);
            return;
        }
        dfs(nums, index + 1, cur | nums[index]);
        dfs(nums, index + 1, cur);
    }

    dfs(nums, 0, 0);
    return ans;
};