/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //https://www.youtube.com/watch?v=gCciKhaK2v8&ab_channel=FisherCoder
    //transpose the matrix(first row become first column...and so on) and reverse all rows
    
    //tranpose
    for(let i =0;i<matrix.length;i++){
        for(let j =i; j<matrix.length;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    //reverse all row in matrix
    for(let i=0;i< matrix.length; i++){
        let left = 0;
        let right = matrix.length -1;
        while(left < right){
            let temp = matrix[i][left]
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = temp;
            left++;
            right--;
        }
    }
};
