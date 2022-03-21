// https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
/**
 * 两数之和 IV - 输入 BST
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const _set = new Set();

  function dfs(node) {
    if (!node) {
      return false;
    }
    if (_set.has(k - node.val)) {
      return true;
    }
    _set.add(node.val);
    return dfs(node.left) || dfs(node.right);
  }
  return dfs(root);
};
