/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length <= 1) {
    return strs[0]
  }
  
  const firstStr = strs[0]
  const sliceStrs = strs.slice(1)

  const publicResult = new Array(sliceStrs.length).fill('')
  
  try {
    for (let i = 0; i < firstStr.length; i++) {
      for (let j = 0; j < sliceStrs.length; j++) {
        const compareStr = sliceStrs[j][i]
        // 匹配到末尾即停止
        if (compareStr !== firstStr[i]) {
          throw new Error()
        }
        
        if (compareStr === firstStr[i]) {
          publicResult[j] += compareStr
        }
      }
    }
  } catch (error) {
    
  }


  publicResult.sort((prev, next) => {
    return prev.length - next.length > 0 ? 1 : -1
  })
  
  const firstPublic = publicResult[0]

  if (firstPublic !== '') {
    return firstPublic
  }
  return ''
};
// @lc code=end

