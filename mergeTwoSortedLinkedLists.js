/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    //https://www.youtube.com/watch?v=N8WTaSSivEI&t=0s&ab_channel=FisherCoder
    
    //1,2,4  1,3,4   1,1,2,3,4,4
    let dummy = new ListNode(-1);
    let curr = dummy; //passed by reference
    
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    //l1 or l2 is null here
    if(l1 == null){
        curr.next = l2;
    } else {
        curr.next = l1;
    }
    
    return dummy.next;
    
};