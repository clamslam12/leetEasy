/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    //get counts of max length array, iterate through the short array because intersection <= short        //array length
    
    //assume nums1 is the max length
//     if(nums1.length < nums2.length){
//         return intersect(nums2, nums1);
//     }
//     let result = [];
//     let count = {};
//     for(let i =0;i<nums1.length;i++){
//         if(!count[nums1[i]]){
//             count[nums1[i]] = 1;
//         } else{
//             count[nums1[i]]++;
//         }
//     }
    
//     for(let i=0; i<nums2.length;i++){
//         if(count[nums2[i]] > 0){
//             result.push(nums2[i]);
//             count[nums2[i]]--;
//         }
//     }
//     return result;
    
    //we assume nums1 is greater than nums2, else we call function with nums1 and nums2 flipped
    //larger array appears first in params
    if(nums1.length < nums2.length){
        return intersect(nums2, nums1);
    }
    
    //store occurrences of bigger array, iterate through smaller array because the intersection/results
    //will always be <= smaller array
    //while match and > 0, decrement each occurrence and push to intersection/result arr
    let result = [];
    let hash = {};
    for(let i =0; i<nums1.length;i++){
        if(!hash[nums1[i]]){
            hash[nums1[i]] = 1;
        } else{
            hash[nums1[i]]++;
        }
    }
    for(let i=0; i< nums2.length;i++){
        if(hash[nums2[i]] > 0){
            result.push(nums2[i]);
            hash[nums2[i]]--;
        }
    }
    return result;
};
