/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  const cacheMapping = new Map<number, number>()

  const computePowSum = (n: number): number => {
    let digit = n
    let sum = 0 // 每位平方后相加的结果
    
    // 当 digit < 1 时，说明已经从个位计算到了最高位，即计算完成平方和
    while (digit >= 1) {
      sum += Math.pow(digit % 10, 2)
      digit = Math.trunc(digit / 10)
    }

    // 判断 sum 是否曾经出现过，出现则代表会无限循环下去，则停止计算
    if (cacheMapping.has(sum)) {
      return -1
    }
    
    if (sum === 1) {
      return n
    }
    // 防止死循环，记录计算过的值
    cacheMapping.set(n, n)
    cacheMapping.set(sum, sum)
    return computePowSum(sum)
  }

  const numOrHappy = computePowSum(n)

  return numOrHappy !== -1
};
// @lc code=end
