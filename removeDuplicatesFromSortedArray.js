/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //using two pointer technique
    let slowPointer = 0;
    //fast pointer
    for(let i = 1; i<nums.length; i++){
        if(nums[slowPointer] != nums[i]){
            nums[slowPointer + 1] = nums[i];
            slowPointer++;
        }
    }
    return slowPointer + 1;
};
