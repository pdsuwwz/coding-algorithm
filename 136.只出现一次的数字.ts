/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  // 异或计算
  return nums.reduce((prev, next) => {
    return prev ^ next
  }, 0)
};
// @lc code=end

