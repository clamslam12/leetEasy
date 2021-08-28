/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    //using two pointers technique
     let frontPointer = 0;
     let endPointer = s.length - 1;
     while(frontPointer < endPointer){
         let temp = s[frontPointer];
         s[frontPointer] = s[endPointer];
         s[endPointer] = temp;
         frontPointer++;
         endPointer--;
     }
     return s;
 };