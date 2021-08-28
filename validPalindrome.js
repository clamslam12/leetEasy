/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //remove spaces
    s = s.replace(/[^a-zA-Z0-9]/g, "").split(" ").join("").toLowerCase();
    console.log(s);
    //using two pointer moving towards each other
    let left = 0;
    let right = s.length -1;
    while(left < right){
        if(s[left] != s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
    
};
