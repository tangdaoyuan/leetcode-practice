// https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/
/**
 * 两个哈希表的最小索引总和
 * 
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    const map = new Map();
    let min = Infinity;
    let ret = []
    list1.forEach((item, ind) => {
        if (!(map.has(item))) {
            map.set(item, ind);
        }
    })
    list2.forEach((item, ind) => {
        if (map.has(item)) {
            if (map.get(item) + ind < min) {
                ret = [];
                min = map.get(item) + ind;
                ret.push(item)
            } else if (map.get(item) + ind === min) {
                ret.push(item)
            }
        }
    })
    return ret;
};