/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
  private _capacity: number
  private cacheList: Map<number, number>
  constructor(capacity: number) {
    this._capacity = capacity
    this.cacheList = new Map()
  }

  getSize(): number {
    return this.cacheList.size
  }

  getStartKey(): number {
    return this.cacheList.keys().next().value
  }

  // 将原有 k-v 移动到最新位置
  setExistMoveByKey(key: number, newValue?: number): void {
    let value = this.cacheList.get(key)
    value = newValue === undefined ? value : newValue

    this.cacheList.delete(key)
    this.cacheList.set(key, value!)
  }
  
  get(key: number): number {
    const value = this.cacheList.get(key)
    if (value !== undefined) {
      this.setExistMoveByKey(key)
      return value
    }

    return -1
  }

  put(key: number, value: number): void {
    // 如果存在 key，直接更新 value 并插入到最新位置
    if (this.cacheList.has(key)) {
      this.setExistMoveByKey(key, value)
      return
    }

    // 如果不存在 key
    // 检查容量大小，若超出则直接删掉最久未使用的
    if (this.getSize() === this._capacity) {
      this.cacheList.delete(
        this.getStartKey()
      )
    }

    this.cacheList.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
