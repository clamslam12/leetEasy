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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    //https://www.youtube.com/watch?v=JZHG8y06_Io&ab_channel=TerribleWhiteboard
    if(root === null){
        return [];
    }
    let queue = [];
    let ansArr = [];
    queue.push(root);
    while(queue.length > 0){
        let levelArr = [];
        let rowQueueLength = queue.length;
        for(let i=0;i<rowQueueLength;i++){
            let currentNode = queue.shift();
            levelArr.push(currentNode.val);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            } 
        }
        ansArr.push(levelArr);
        
    }
    return ansArr;
    
};