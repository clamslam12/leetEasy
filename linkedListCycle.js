/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let hashVisited = new Map();
    while(head != null){
        if(hashVisited.get(head) == true){
           return true;
        } else {
            hashVisited.set(head, true);
            head = head.next;
        }
    }
    return false;
};