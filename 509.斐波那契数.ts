/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  
  const cacheMapping = new Map<number, number>()
  
  const compute = (n: number) => {
    if (cacheMapping.has(n)) return cacheMapping.get(n)
    if (n === 0) {
      cacheMapping.set(n, 0)
      return 0
    }
    if (n <= 2) {
      cacheMapping.set(n, 1)
      return 1
    }
    
    const prev = compute(n - 2)
    const next = compute(n - 1)

    cacheMapping.set(n - 2, prev)
    cacheMapping.set(n - 1, next)
    
    return prev + next
  }

  return compute(n)
};
// @lc code=end

// 0 1 2 3 4
// 0 1 1 2 3 5