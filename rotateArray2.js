/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //retrieve the last kth #s and push to new array, retrieve the remaining #s and push to new array,
    //set nums = newArr
    // let newArr = [];
    // for(let i=nums.length - k; i< nums.length;i++){
    //     newArr.push(nums[i]);
    // }
    // console.log(newArr);
    // for(let i=0; i<nums.length - k;i++){
    //     newArr.push(nums[i]);
    // }    
    // console.log(newArr);
    // nums = newArr;
    
    // //brute force - https://www.youtube.com/watch?v=iCzPkkpakd0&ab_channel=ProgrammingTutorials
    // //save the last item in array, shift all other items by k times, decrement k, while k>0
    // let i = 0;
    // let len = nums.length;
    // while(k > 0){
    //     //get the last number in the array, save it, and put it in front after shifting
    //     let temp = nums[len -1];
    //     //starting from end to 2nd place in arr, make the current place equal its previous
    //     for(let j=len-1; j>0;j--){
    //         nums[j] = nums[j-1];
    //     }
    //      //1st place in arr is temp
    //     nums[i] = temp;
    // }
    // console.log(nums)
    
    //Optimal - https://www.youtube.com/watch?v=T9zQP1IkMDE&ab_channel=TerribleWhiteboard
    //1,2,3,4,5,6,7 k = 3 -> 5,6,7,1,2,3,4
    //k = k % length, for range from 0 - (length -1), any k >=5 is same as its k between 0-4
    //1) reverse everything 7,6,5,4,3,2,1
    //2) reverse first k   5,6,7,4,3,2,1
    //3) reverse last length - k -1   5,6,7,1,2,3,4
    
    // k %= nums.length;
    // reverse(nums, 0, nums.length-1);
    // reverse(nums, 0, k-1);
    // reverse(nums, k, nums.length -1);
    
    //using brute force; time O(kn) space O(1);
    //for each shift, the last item will be at the front.
    //save the last item, shift everything right once, then put the last item to 1st of arr
    
    //while we have to shift
    // while( k > 0){
    //     //save last item in arr
    //     let temp = nums[nums.length -1];
    //     //shift from last to 2nd of array
    //     for(let j = nums.length-1; j>0; j--){
    //         nums[j] = nums[j-1];
    //     }
    //     //set first of arr to last item
    //     nums[0] = temp;
    //     k--;
    // }
    
    //optimal; time O(n) space O(1)
    ////1,2,3,4,5,6,7 k = 3 -> 5,6,7,1,2,3,4
    //reverse whole arr, reverse first k, reverse last length - k
    k %= nums.length;
    reverse(nums, 0, nums.length -1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length -1);
    
}

// function reverse(nums, left, right){
//     //2 pointers moving towards each other
//     while(left < right){
//         let temp = nums[left];
//         nums[left] = nums[right];
//         nums[right] = temp;
//         left++;
//         right--;
//     }
    
// }

function reverse(nums, left, right){
    while(left < right){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
}



