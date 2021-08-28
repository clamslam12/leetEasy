/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    //https://www.youtube.com/watch?v=12omz-VAyRk&ab_channel=NickWhite
    if(nums.length == 0){
        return null;
    }
    
    return makeBST(nums, 0, nums.length - 1);
    
};

function makeBST(nums, left, right){
    if(left > right){
        return null;
    }
    let mid = left + Math.floor((right - left)/2);
    //make middle number in array as the root
    let root = new TreeNode(nums[mid]);
    //make left subrray and right subarray as subtrees because we know they are less than and greater 
    //than root
    root.left = makeBST(nums, left, mid -1);
    root.right = makeBST(nums, mid + 1, right);
    return root;
    
    
}