/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// [1,3,5,6] \n 7

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  const len = nums.length;
  if (target <= nums[0]) return 0;
  if (target > nums[len - 1]) return len;

  //   0    1    2    3    4    5    6    7
  // [100, 200, 300, 400, 500, 600, 700, 800], 501

  // 获取中心节点
  const getCenterNode = (indexLeft: number, indexRight: number) => {
    const currentLen = indexRight - indexLeft;
    if (currentLen === 1) {
      return {
        index: indexRight,
        value: nums[indexRight],
      };
    }

    let index = currentLen % 2 === 0
      ? currentLen / 2
      : Math.floor(currentLen / 2);
    index += indexLeft;

    const value = nums[index];

    return {
      index,
      value,
    };
  };

  const innerSearch = (indexLeft: number, indexRight: number) => {
    const centerNode = getCenterNode(indexLeft, indexRight);
    console.log("centerNode", centerNode);

    if (target === centerNode.value) {
      return centerNode.index;
    }

    // 找到最后并没有结果，则返回预计插入的位置
    if (centerNode.index === indexRight) {
      return centerNode.index;
    }

    if (target > centerNode.value) {
      indexLeft = centerNode.index;
    } else {
      indexRight = centerNode.index;
    }
    return innerSearch(indexLeft, indexRight);
  };

  let indexLeft = 0;
  let indexRight = len - 1;

  return innerSearch(indexLeft, indexRight);
}
// @lc code=end
