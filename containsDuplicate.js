/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //time O(n) space O(n)
    let hashTable = {};
    for(let i=0; i<nums.length; i++){
        if(!hashTable[nums[i]]){
            hashTable[nums[i]] = 1;
            continue;
        }
        hashTable[nums[i]]++;
    }
    for(let i=0;i<nums.length;i++){
        if(hashTable[nums[i]] >= 2){
            return true;
        }
    }
    return false;
    
    
};
