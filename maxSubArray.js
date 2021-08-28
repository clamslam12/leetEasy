/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    //https://www.youtube.com/watch?v=gwUGDXO5gHU&ab_channel=TerribleWhiteboard
    //-2,1,-3,4,-1,2,1,-5,4
    
    let currentMax = nums[0];
    let globalMax = nums[0];
    
    for(let i =1;i<nums.length;i++){
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        globalMax = Math.max(currentMax, globalMax);
    }
    
    return globalMax;
    
};