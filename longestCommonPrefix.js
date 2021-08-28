/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //https://www.youtube.com/watch?v=gJOgI8TpSgc&ab_channel=WebDevSimplified
    //"flower",
    //"flow",
    //"flight -> 'fl'
    let prefix = "";
    if(strs == null || strs.length == 0){
        return prefix;
    }
    
    for(let i=0; i<strs[0].length;i++){
        const currentChar = strs[0][i];
        for(let j=0;j<strs.length;j++){
            if(currentChar != strs[j][i]){
                return prefix;
            }
        }
        prefix += currentChar;
    }
    
    return prefix;
    
};
