/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
//     //time O(n) space O(n)
//     let hash = {};
    
//     for(let i = 0; i < nums.length; i++){
//         let needNum = target - nums[i];
//         if(hash[needNum] != null){
//             return [i, hash[needNum]];
//         }
//         hash[nums[i]] = i;
//     }
    
    //https://www.youtube.com/watch?v=0l2nePjDFuA&t=53s&ab_channel=BrennanFradelis
    //using two pointer left and right moving towards each and sorting the array
    // nums = nums.sort(function(a,b){return a -b;});
    // let left = 0;
    // let right = nums.length -1;
    // while(left < right){
    //     //want pointerSum == target 
    //     let pointerSum = nums[left] + nums[right];
    //     if(pointerSum < target){
    //         //increment left because we need bigger nums to add
    //         left++;
    //     }
    //     else if(pointerSum > target){
    //         //decrement right because we need smaller nums to add
    //         right--;
    //     }else{
    //         return [left, right];
    //     }
    // }
    
    //using complement
    //if complement in the hash, then return current index and index of complement, else store
    //current nums and its index in hash
    let hash = {};
    for(let i = 0;i< nums.length;i++){
        let complement = target - nums[i];
        if(hash[complement] != null){
            return [i, hash[complement]];
        }
        hash[nums[i]] = i;
       
    }
    
    
    
};
