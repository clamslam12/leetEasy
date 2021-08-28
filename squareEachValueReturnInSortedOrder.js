//[-4,-3,1,2,3] input
//[1,4,9,9,6] return

function sortedSquare(arr) {
    //https://www.youtube.com/watch?v=0l2nePjDFuA&t=53s&ab_channel=BrennanFradelis
    let right = 0;
    //find the first non negative number
    while(right < arr.length && arr[right] < 0){
        right++;
    }
    //set left to one less than right
    let left = right -1;
    
    let output = [];
    //pointers will start next to each other then move away from one another as loop progresses.
    while(left >= 0 || right < arr.length){
        if(Math.pow(arr[right], 2) < Math.pow(arr[left], 2)){
            output.push(arr[right]);
            right++;
        } else {
            output.push(arr[left]);
            left--;
        }
    }
    //here, left or right pointer is out of bounds
    //if left is out of bounds, push remaining items from right
    while(right<arr.length){
        output.push(Math.pow(arr[right], 2));
        right++;
    }
    //if right out of bounds, push remaining items from left
    while(left>=0){
        output.push(Math.pow(arr[left], 2));
    }
    return output;
    
}

console.log(sortedSquare([-4,-3,1,2,3]));
