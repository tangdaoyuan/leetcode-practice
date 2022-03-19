// https://leetcode-cn.com/problems/construct-string-from-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 根据二叉树创建字符串
 * 
 * @param {TreeNode} root
 * @return {string}
 */
 var tree2str = function(root) {
    return traverse(root);
};

function traverse(node) {
    if (!node) {
        return '';
    }
    
    let str = `${node.val}`

    if (node.left || node.right) {
        str = `${str}(${traverse(node.left)})`
    }

    if (node.right) {
        str = `${str}(${traverse(node.right)})`
    }
    return str;
}