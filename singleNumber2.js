/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //https://www.youtube.com/watch?v=m8QvwmfJwvA&ab_channel=TerribleWhiteboard
    //using set: has(), delete(), add(); Array.from()
    
    //using Set; if not in set, add it, else remove it. At the end the only item in set is the one 
    //without a duplicate
    
//     let mySet = new Set();
//     for(let i=0; i<nums.length;i++){
//         if(!mySet.has(nums[i])){
//             mySet.add(nums[i]);
//         } else {
//             mySet.delete(nums[i]);
//         }
//     }
    
//     return Array.from(mySet)[0];
    
//     //Storing count of num in hash and iterate through to see which num has count < 2.
//     let hashCount = {};
//     for(let i=0; i<nums.length; i++){
//         if(!hashCount[nums[i]]){
//             hashCount[nums[i]] = 1;
//         } else {
//             hashCount[nums[i]]++;
//         }
//     }
    
//     //two ways to iterate through objects
//     //1) 
//     // for(let i=0;i<nums.length;i++){
//     //     if(hashCount[nums[i]] < 2){
//     //         return nums[i];
//     //     }
//     // }
//     //2)
//     for(const num in hashCount){
//         if(hashCount[num] < 2){
//             return num;
//         }
//     }
    //using set
    let mySet = new Set();
    for(let i=0; i< nums.length;i++){
        //if set dont have number, then add it to the set
        if(!mySet.has(nums[i])){
            mySet.add(nums[i]);
        }
        //else delete the number from the set
        else{
            mySet.delete(nums[i])
        };
        
    }
    //at the end, the only number left in the set is the number that does not have duplicates
    return Array.from(mySet)[0];
    
};
