/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   //Init an empty string and iterate through the input string from last to end and add each char          //to it
    // let myStr = '';
    // for(let i=s.length-1; i>=0; i--){
    //     myStr += s[i];
    // }
    // s = myStr.split('');
    // console.log(s);
    
    //Using 2 pointer moving towards each other making sure left < right because the char when they         //equal is they same; save first to temp then swap; increment left, decrement right
    // let leftPointer = 0;
    // let rightPointer = s.length - 1;
    // while(leftPointer < rightPointer){
    //     let temp = s[leftPointer];
    //     s[leftPointer] = s[rightPointer];
    //     s[rightPointer] = temp;
    //     leftPointer++;
    //     rightPointer--;
    // }
    
    //time O(n) space O(1) using two pointers
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
        
    }
    
    
};
