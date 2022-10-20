/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

function maxDepth(root: TreeNode | null): number {
  // if (!root) return 0

  // if (root && !root.left && !root.right) return 1

  const traverseDeep = (node: TreeNode | null, depth = 0) => {
    if (!node) return depth

    depth++
    // 获取左叶子结点深度
    const depthLeft = traverseDeep(node.left, depth)
    // 获取右叶子结点深度
    const depthRight = traverseDeep(node.right, depth)
    return Math.max(depthLeft, depthRight)
  }
  const maxHeight = traverseDeep(root)
  return maxHeight
};
// @lc code=end

