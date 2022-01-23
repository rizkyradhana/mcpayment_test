var twoSum = function (nums, target) {
  result = [];
  map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i];
    if (map.has(dif)) {
      result[0] = map.get(dif);
      result[1] = i;
      break;
    } else {
      map.set(nums[i], i);
    }
  }
  return result;
};
