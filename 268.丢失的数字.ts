/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  const n = nums.length
  // 先跟最后一位异或，n = 0 ^ n，即 n
  let result = n
  for (let i = 0; i < n; i++) {
    result ^= i ^ nums[i]
  }
  return result
};
// @lc code=end


// 索引: 0 1 2 3 4 5 6
// 给定: 0 1 2 3 4 6

// 索引与给定数字依次异或，到最后相同的为 0，不同的即为丢失的数字 5
