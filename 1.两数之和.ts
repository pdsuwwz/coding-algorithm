/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {

  const mapping = {}
  for (let i = 0; i < nums.length; i++) {
    if (
      mapping[ target - nums[i] ] !== undefined
    ) {
      return [ mapping[ target - nums[i] ], i ]
    }
    mapping[ nums[i] ] = i
  }
};
// @lc code=end

