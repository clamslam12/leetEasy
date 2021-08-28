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
 * @return {number}
 */

 var maxDepth = function(root) {
    //check the height of current node's left and right subtree recursively, take maximum between the       //two height, then add 1 because of root node
    // if(root == null){
    //     return 0;
    // }
    // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    
    //iterative bfs
    if(root == null){
        return 0;
    }
    let queue = []; /// []
    queue.push(root);
    let currentMax = 0;
    while(queue.length > 0){
        let levelLength = queue.length;
        for(i=0; i<levelLength; i++){
            let currentNode = queue.shift();
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        //now, queue contains all nodes a level below
        currentMax++;
        
    }
    return currentMax;
    
};