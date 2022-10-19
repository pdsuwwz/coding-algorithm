/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 3) return n

  // 从第 4 步开始走，所以构造 n-1=3, n-2=2
  let n2 = 2 // n-2
  let n1 = 3 // n-1
  let step = 3

  let sum = 0
  while (step < n) {
    // n = n-1 + n-2
    sum = n1 + n2
    n2 = n1 // 由于往前走了一位，所以将 n-2 变成前一个 n-1
    n1 = sum // 由于往前走了一位，所以将 n-1 变成当前项 n
    step++
  }
  return sum
};
// @lc code=end

/**
 * 0 -> 0
 * 1 -> 1
 * 2 -> 2
 * 3 -> 3
 * 4 -> 5 1111,112,121,211,22
 * 5 -> 8 11111,2111,221,212,1211,122,1121,1112
 */