function mergeSort(nums) {
  function mergeTwoList(nums1, nums2) {
      var p1 = 0, p2 = 0;
      var result = [];
      while(p1 != nums1.length && p2 != nums2.length) {
        if(nums1[p1] < nums2[p2]) {
          result.push(nums1[p1++]);
        }
        else {
          result.push(nums2[p2++]);
        }
      }
      if(p1 != nums1.length) {
        while(p1 != nums1.length) {
          result.push(nums1[p1++]);
        }
      }
      else if (p2 != nums2.length) {
        while(p2 != nums2.length) {
          result.push(nums2[p2++]);
        }
      }
      return result;
    }

    if(nums.length == 1) {
      return nums;
    }
    else {
      return mergeTwoList(mergeSort(nums.slice(0, nums.length / 2)), mergeSort(nums.slice(nums.length /2 , nums.length)));
    }
}
