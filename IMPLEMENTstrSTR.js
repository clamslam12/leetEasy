/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //https://www.youtube.com/watch?v=AsysPr44uGk&ab_channel=KrishnaTeaches
    //Input: haystack = "hello", needle = "ll"
    //Output: 2
//    if(needle.length == 0){
//        return 0;
//    }
//     let index = -1;
//     let found = false;
//     for(let i=0; i<haystack.length;i++){
//         if(haystack[i] == needle[0]){
//             for(let j = 0;j<needle.length;j++){
//                 if(haystack[i+j] == needle[j]){
//                     found = true;
//                 } else {
//                     found = false;
//                     break;
//                 }
//             }
//             if(found){
//                 return i;
//             }
//         }
//     }
    
//     return index;
    //Input: haystack = "hello", needle = "ll"
    //Output: 2
    if(needle.length == 0){
        return 0;
    }
    let found = false;
    for(let i =0; i<haystack.length;i++){
        if(haystack[i] == needle[0]){
            for(let j = 0; j<needle.length;j++){
                if(haystack[i+j] == needle[j]){
                    found = true;
                } else {
                    found = false;
                    break;
                }
            }
        }
        //here we have iterate through the needle and compared it to the haystack
        //we check our flag to see if the whole needle is indeed in the haystack
        //
        if(found){
            return i
        }
    }
    //here we did not find any the needle because found flag is false
    return -1;
};
