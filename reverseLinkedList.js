/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    //using 2 pointers moving same direction same time
     if(head === null){
         return null;
     }
     let first = head;
     let second = head.next;
     head.next = null;
     while(second){
         let temp = second.next;
         second.next = first;
         first = second;
         second = temp;
     }
     return first;
 };