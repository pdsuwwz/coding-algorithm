/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {

  // 负数
  if (x < 0) {
    return false
  }

  // 个位数直接返回真
  if (x % 10 === x) {
    return true
  }
  
  const list: Array<number> = []
  let nextNum = x
  let isEnd = false
  while(!isEnd) {
      // console.log(nextNum % 10)
      if (nextNum % 10 === nextNum) {
          isEnd = true
      }
      list.unshift(nextNum % 10)
      nextNum = Math.trunc(nextNum / 10)
  }

  // 遍历，依次x10相加即可
  let nn = 1
  const palindromeNumber = list.reduce((prev, next) => {
    nn *= 10
    return prev + next * nn
  })

  return palindromeNumber === x
};
// @lc code=end

