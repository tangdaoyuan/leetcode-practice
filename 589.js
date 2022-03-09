// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
/**
 * N叉数的前序遍历
 *
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = [];
  if (root === null) {
    return res;
  }

  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);

    for (const child of node.children.reverse()) {
      stack.push(child);
    }
  }
  return res;
};
