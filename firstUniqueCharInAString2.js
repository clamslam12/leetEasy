/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //time O(n), space O(n)
    //https://www.youtube.com/watch?v=21LDcomZ1as&ab_channel=TerribleWhiteboard
    
    //save the count for each char. loop through string again and if a char count < 2, then thats the
    //FIRST unique char because of the linear property of array
    
//     let count = {};
//     let index = -1;
    
//     for(let i=0; i<s.length;i++){
//         if(!count[s[i]]){
//             count[s[i]] = 1;
//         }else{
//             count[s[i]]++;
//         }
//     }
    
//     for(let i = 0;i<s.length;i++){
//         if(count[s[i]] < 2){
//             index = i;
//             break;
//         }
//     }
    
//     return index;
    
    //save occurrences in hash, then loop again and return the index if the occurence for the char is       //less than 2 because by nature of linear search, if the occurrence is less than 2, it is the 1st
    let hash = {};
    for(let i =0;i<s.length;i++){
        if(!hash[s[i]]){
            hash[s[i]] = 1;
        } else {
            hash[s[i]] += 1;
        }
    }
    for(let i =0;i<s.length;i++){
        if(hash[s[i]] < 2){
            return i;
        }
    }
    
    return -1;
    
    
    
    
};
