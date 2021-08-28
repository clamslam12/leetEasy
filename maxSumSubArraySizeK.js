//sliding window
//https://www.youtube.com/watch?v=VM1kmLrrN4Y&t=658s&ab_channel=BrennanFradelis


function maxSumSubArray(arr, k){
    let left = 0;
    let maxSum = -Infinity;
    let subArrSum = 0;

    for(let right = 0; right < arr.length;right++){
        //add sum of subarray
        subArrSum += arr[right];
        //if we reached the kth size subarray
        if(right - left +1 == k){
            maxSum = Math.max(subArrSum, maxSum);
            subArrSum -= arr[left];
            left++
        }
    }
    return maxSum;

};

console.log(maxSumSubArray([2,3,4,1,5], 3));

