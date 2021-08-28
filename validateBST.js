/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    //https://www.youtube.com/watch?v=kR5AxWHa9nc&ab_channel=FisherCoder
    //using dfs with min and max 
    if(root == null){
        return true;
    }
    return dfs(root, null, null) //root, min, max
    
};

function dfs(node, min, max){
    if(node == null){
        return true;
    }
    //base case
    if((min!= null && node.val <= min) || (max != null && node.val >= max)){
        return false;
    }
    //recursive case
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
}