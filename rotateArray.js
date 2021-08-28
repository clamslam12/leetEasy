/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    //https://www.youtube.com/watch?v=T9zQP1IkMDE&ab_channel=TerribleWhiteboard
    //1,2,3,4,5,6,7 k = 3 -> 5,6,7,1,2,3,4
    //k = k % length, for range from 0 - (length -1), any k >=5 is same as any k between 0-4
    //1) reverse everything 7,6,5,4,3,2,1
    //2) reverse first k 5,6,7,4,3,2,1
    //3) reverse last length - k 5,6,7,1,2,3,4
    
    k = k % nums.length;
    reverse(nums, 0, nums.length -1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length -1);
};

function reverse(nums, start, end){
    //2 pointers moving towards each other
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}