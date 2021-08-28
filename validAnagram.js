/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //check if both strings have same number of occurances for each char.
    if(s.length != t.length){
        return false;
    }
    let sHash = {};
    let tHash = {};
    //# of occurances for each char in s
    for(let i=0; i< s.length;i++){
        if(!sHash[s[i]]){
            sHash[s[i]] = 1;
        }
        sHash[s[i]]++;
    }
    //# of occurances for each char in t
    for(let i=0; i< t.length;i++){
        if(!tHash[t[i]]){
            tHash[t[i]] = 1;
        }
        tHash[t[i]]++;
    }
    //check if # of occurances of each char in each hash are same
    for(let i=0;i<s.length;i++){
        if(sHash[s[i]] != tHash[s[i]]){
            return false;
        }
    }
    
    return true;
    
    
    
};
