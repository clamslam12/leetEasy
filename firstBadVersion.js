/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //https://www.youtube.com/watch?v=P1j1eKrBx4E&ab_channel=TerribleWhiteboard
        //1  2  3  4  5  6  7
        //            b  b  b
        let left = 1;
        let right = n;
        while(left < right){
            let mid = left + Math.floor((right - left)/2);
            if(!isBadVersion(mid)){
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
        
        
    };
};
