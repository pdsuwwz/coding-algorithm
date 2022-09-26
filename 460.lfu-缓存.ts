/*
 * @lc app=leetcode.cn id=460 lang=typescript
 *
 * [460] LFU 缓存
 */

// @lc code=start


interface CacheItem {
  key: number
  value: number
  count: number
}

class LFUCache {
  private _capacity: number; // 容量
  private cacheMapping: Map<number, CacheItem>; // k-v 集合
  private freqMapping: Map<number, Set<CacheItem>>// 频率区间 1: [{}, {}]; 2: [{}, {}, {}]

  constructor(capacity: number) {
    this._capacity = capacity;
    this.cacheMapping = new Map()
    this.freqMapping = new Map()
  }

  // 获取频次最低且最旧的值
  getLowFrequency(): CacheItem {
    let cacheItemlowFrequency: CacheItem
    
    const it = this.freqMapping.entries()
    for (const [, cacheItemSet] of it) {
      if (cacheItemSet.size) {
        cacheItemlowFrequency = cacheItemSet.keys().next().value
        break;
      }
    }
    
    return cacheItemlowFrequency!
  }

  // 将 cacheItem 从原有区间中移除
  removeSetItemByCount(count: number, cacheItem: CacheItem) {
    const setList = this.freqMapping.get(count)!
    setList.delete(cacheItem)
  }

  // 将 cacheItem 的引用添加到高位频率区间，同时将其从原有低位区间中移除
  addToSetItemByCount(count: number, cacheItem: CacheItem) {
    if (count !== 1) {
      this.removeSetItemByCount(count - 1, cacheItem)
    }
    
    
    let setList = this.freqMapping.get(count)
    if (!setList) {
      setList = new Set()
      this.freqMapping.set(count, setList)
    }

    setList.add(cacheItem)
  }
  
  get(key: number): number {
    // 若不存在，直接返回 -1
    if (!this.cacheMapping.has(key)) return -1

    // 如存在，返回对应 value 并且 count 计数 +1
    const cacheItem = this.cacheMapping.get(key)!
    cacheItem.count++
    this.addToSetItemByCount(cacheItem.count, cacheItem)

    return cacheItem.value
  }

  put(key: number, value: number): void {

    // 容量为 0，禁止插入
    if (this._capacity === 0) {
      return
    }
    
    
    // 若存在，直接更新 k-v 并设置 count++
    if (this.cacheMapping.has(key)) {
      const cacheItem = this.cacheMapping.get(key)!
      cacheItem.value = value
      this.get(key)
      return
    }

    // 若不存在，判断是否溢出容器大小，若容器将溢出
    // 删掉频次最低且最旧的值
    if (this._capacity === this.cacheMapping.size) {
      const cacheItem = this.getLowFrequency()
      this.cacheMapping.delete(cacheItem.key)
      this.removeSetItemByCount(cacheItem.count, cacheItem)
    }

    // 直接添加 k-v
    const newCacheItem = {
      key,
      value,
      count: 1
    }
    this.cacheMapping.set(key, newCacheItem)
    this.addToSetItemByCount(1, newCacheItem)
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
