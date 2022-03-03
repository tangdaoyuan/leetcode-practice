// https://leetcode-cn.com/problems/add-digits/
/**
 * 各位相加
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let ret = num;
    while(ret > 9) {
        let count = 0;
        while(ret > 0) {
            count += ret % 10
            ret = Math.floor(ret / 10);
        }
        ret = count;
    }
    return ret;
};