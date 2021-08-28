/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    //https://www.youtube.com/watch?v=m8QvwmfJwvA&ab_channel=TerribleWhiteboard
    //using set: has(), delete(), add(); Array.from()
    
//     let set = new Set();
    
//     for(let i=0; i<nums.length;i++){
//         if(set.has(nums[i])){
//             set.delete(nums[i]);
//         } else {
//             set.add(nums[i]);
//         }
//     }
    
//     return Array.from(set)[0];
    //* *
    //1,2,1,2
    let hash = {}
    for(let i=0; i< nums.length;i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
            continue;
        }
        hash[nums[i]]++;
    }
    
    for(let i =0;i<nums.length;i++){
        if(hash[nums[i]] < 2){
            return nums[i];
        }
    }
    
};