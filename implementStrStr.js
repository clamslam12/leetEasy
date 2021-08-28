/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    //https://www.youtube.com/watch?v=AsysPr44uGk&ab_channel=KrishnaTeaches
    if(needle.length == 0){
        return 0;
    }
    let firstIndex = -1;
    let found = false;
    for(let i =0; i <haystack.length;i++){
        if(haystack[i] == needle[0]){
            firstIndex = i;
            for(let j = 0; j<needle.length;j++){
                if(haystack[i+j] == needle[j]){
                    found = true;
                }else{
                    found = false;
                    break;
                }
            }
            if(found){
                return i;
            }
        }
    }
    return -1;
    
};