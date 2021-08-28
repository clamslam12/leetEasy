/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //https://www.youtube.com/watch?v=Kka8VgyFZfc&ab_channel=FisherCoder
    //using slow and fast pointer and dummy node pointing to head
    let dummy = new ListNode(-1, head);
    let slowPointer = dummy;
    let fastPointer = dummy;
    
    while(fastPointer.next != null){
        fastPointer = fastPointer.next;
        if(n <= 0){
            slowPointer = slowPointer.next;
        }
        n--;
    }
    slowPointer.next = slowPointer.next.next;
    return dummy.next;
    
    
};
