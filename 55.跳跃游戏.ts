/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  const len = nums.length
  if (len === 1) {
    return true
  }
  
  if (nums[0] >= len - 1) {
    return true
  }

  /**
   * 遍历每个格子，记录每个格子能跳跃的最大距离
   * 但凡存在这个距离 >= 末尾的位置并且能跳到这个格子的，即为 true
   */

  /**
   * 依次跳跃，每次跳跃后记录当前及以前格子所能到达的最大距离
   * 若这个距离 >= 末尾的位置 即为 true
   */

  // 当前格子所接触的最大距离
  let maxRange = 0
  /**
   * 记录每次遍历时的能够覆盖的最远到达距离 maxRange
   * 但凡存在当前索引 > 最大距离时（即：即使跳跃了最大距离的步数也到不了当前索引时，说明无法到达）
   * 判断时需要排除最大距离正好到最后的位置
   */
  for (let i = 0; i < len; i++) {
    maxRange = Math.max(maxRange, nums[i] + i)

    if (i >= maxRange && i !== len - 1) return false
  }

  return true
  
};
// @lc code=end

