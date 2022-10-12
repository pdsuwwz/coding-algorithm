/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(str: string): boolean {
  const leftMapping = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack: Array<string> = []
  for (let i = 0; i < str.length; i++) {
    const chars = str[i]
    // 每当匹配到左括号时，入栈，等待下一次循环能匹配到右括号
    if (['(', '{', '['].includes(chars)) {
      stack.push(chars)
      continue
    }
    // 若匹配到左右括号，则弹出左括号；否则匹配不到即表示括号不合法
    if (stack[stack.length - 1] === leftMapping[chars]) {
      stack.pop()
    } else {
      return false
    }
  }
  // 当遇到出现连续左括号的用例时，如 (( {{{ [[[ ，上述循环不会校验
  // 则需要在最后判断 stack 是否为空，如果不为空则表示没有匹配完全，即不合法

  return stack.length === 0
};
// @lc code=end

