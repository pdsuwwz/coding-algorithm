/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(str: string): boolean {
  const leftMapping = {
    '(': ')',
    '{': '}',
    '[': ']',
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack: Array<string> = []
  for (let i = 0; i < str.length; i++) {
    const chars = str[i]
    if (['(', '{', '['].includes(chars)) {
      stack.push(chars)
      continue
    }
    if (stack[stack.length - 1] === leftMapping[chars]) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
};
// @lc code=end

