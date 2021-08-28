/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    //time O(n), space O(n)
    //https://www.youtube.com/watch?v=21LDcomZ1as&ab_channel=TerribleWhiteboard
    let hashTable = {};
    let index = -1;
    
    //record number of occurences of each char
    for(let i=0; i<s.length;i++){
        if(!hashTable[s[i]]){
            hashTable[s[i]] = 1;
            continue;
        }
        hashTable[s[i]]++;
    }
    //find the first char in hash table that is < 2
    for(let i=0;i<s.length;i++){
        if(hashTable[s[i]] < 2){
            index = i;
            break;
        }
    }
    
    
    return index;
    
};