/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    // 如果 +1 后不会进位，则直接+1
    if (digits[i] + 1 <= 9) {
      digits[i] += 1
      break;
    }
    // 否则进位，即置为 0
    digits[i] = 0
  }
  
  // 如果最高位是 0，则需要补位
  if (digits[0] === 0) {
    digits.unshift(1)
  }
  return digits
};
// @lc code=end

