/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //https://www.youtube.com/watch?v=gwUGDXO5gHU&ab_channel=TerribleWhiteboard
    //-2,1,-3,4,-1,2,1,-5,4
    
    //get the max between currrent num and current num + prev num because of contiguous
    //set that to local max
    //get the max between local and global max and set that as global;
//     let localMax = nums[0];
//     let globalMax = nums[0];
//     for(let i =1; i<nums.length;i++){
//         localMax = Math.max(nums[i], nums[i] + localMax);
//         globalMax = Math.max(localMax, globalMax);
//     }
    
//     return globalMax;
    
    //Kadane's algorithm
    let localMax = nums[0];
    let globalMax = nums[0];
    for(let i =1; i< nums.length;i++){
        localMax = Math.max(nums[i], nums[i] + localMax);
        globalMax = Math.max(localMax, globalMax);
    }
    return globalMax;
    
    
};
