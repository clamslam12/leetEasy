/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //n = 1 -> 1
    //n = 2 -> 2
    //n = 3 -> 3
    //n = 4 -> 5
    if(n == 1){
        return n;
    }
    let cache = [];
    cache[1] = 1;
    cache[2] = 2;
    for(let i=3; i<=n; i++){
        cache[i] = cache[i-1] + cache[i-2];
    }
    return cache[n];
    
    
};
