/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
//     //nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//    //using 2 end pointers for each array and a global pointer starting at end of storage array
//     let nums1P = m -1;
//     let nums2P = n -1;
    
//     //global pointer
//     for(let i = m+n-1; i>= 0; i--){
//         //array2 is shorter so if it ends, then we know everything is sorted in array1
//         if(nums2P < 0){
//             break;
//         }
//         if(nums1[nums1P] > nums2[nums2P]){
//             //store in storage array and decrement pointer1 because we moved moved its value
//             nums1[i] = nums1[nums1P];
//             nums1P--
//         } else{
//             //store in storage array and decrement pointer2 because we moved moved its value
//             nums1[i] = nums2[nums2P];
//             nums2P--;
//         }
//     }
    
    ////nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    //using 3 pointers; one for each array and one global pointer to store the comparisons
    //
    let nums1P = m - 1;
    let nums2P = n - 1;
    
    //global pointer i
    for(let i = m+n-1; i>= 0;i--){
        //2nd arr pointer is out of bounds; in which case 1st/2nd arr merge is finished since 
        //elements in 2st arr is sorted
        if(nums2P < 0){
            break;
        }
        //if last element from 1st array is greater than last element from 2nd array
        if(nums1[nums1P] > nums2[nums2P]){
            //set the greater element to global pointer's location then check other element in 1st arr
            nums1[i] = nums1[nums1P];
            nums1P--;
        } else {
            //last element from 2nd arr is greater than last element from 1str arr
            nums1[i] = nums2[nums2P];
            nums2P--;
        }
    }
    
    
    
};
