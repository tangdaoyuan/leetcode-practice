// https://leetcode-cn.com/problems/reverse-only-letters/
/**
 * 仅仅反转字符串
 *
 * @param {string} s
 * @return {string}
 */

const regx = /[a-zA-Z]/;
var reverseOnlyLetters = function(s) {
    const _ret = s.split('');
    let i = 0;
    let j = _ret.length - 1;
    while(i < j) {
        while (!regx.test(_ret[i])) {
            i++;
        }
        while (!regx.test(_ret[j])) {
            j--;
        }
        if (i < j) {
            _ret[i] = s[j];
            _ret[j] = s[i];
            i++;
            j--;
        }
    }
    return _ret.join('');
};