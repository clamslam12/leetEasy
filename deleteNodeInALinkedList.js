/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //1,2,3,4,5,null
    let newVal = node.next.val;
    let newNext = node.next.next;
    node.val = newVal;
    node.next = newNext;
};
