function quickSort(nums) {
  if(nums.length <= 1) {
    return nums;
  }
  var pivot = nums[nums.length-1];
  var left = [], right = [];
  for(var i = 0; i < nums.length-1; i++) {
    if(nums[i] < pivot) {
      left.push(nums[i]);
    }
    else {
      right.push(nums[i]);
    }
   }
   var new_left = quickSort(left);
   var new_right = quickSort(right);
   new_left.push(pivot);
   return new_left.concat(new_right);
}
