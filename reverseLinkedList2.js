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
//     //using two pointers curr , prev moving same direction with curr starting at 2nd node
//    if(head == null){
//        return null;
//    }
//     let curr = head.next;
//     let prev = head
//     head.next = null;
//     while(curr){
//         let temp = curr.next;
//         curr.next = prev;
//         //make sure to move prev to curr before curr to temp
//         prev = curr;
//         curr = temp
        
//     }
//     return prev;//which is new head node since curr is now null
    if(head == null){
        return null
    }
    let prev = head;
    let curr = head.next;
    head.next = null;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    
    }
    //here curr is null
    return prev;
};
