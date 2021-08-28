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
    
    //Input: l1 = [1,2,4], l2 = [1,3,4]
    //Output: [1,1,2,3,4,4]
    
//     let dummy = new ListNode(-1);
//     let curr = dummy;
    
//     while(l1!= null && l2!= null){
//         if(l1.val < l2.val){
//             curr.next = l1;
//             l1 = l1.next;
//         } else {
//             curr.next = l2;
//             l2 = l2.next;
//         }
//         curr = curr.next;
//     }
//     if(l1 == null){
//         curr.next = l2;
//     }else{
//         curr.next = l1;
//     }
    
//     return dummy.next;
    
    ////Input: l1 = [1,2,4], l2 = [1,3,4]
    //Output: [1,1,2,3,4,4]
    
    //using dummy node and curr pointer
    //if a linked list pointer is null, we have finished merging one list and can connect it to the         //other linked list since the other linked list is sorted.
    
    //merging any sorted lists/linked list using two pointers starting at front: move pointer that is       //less until the value is greater, than start moving the other pointer
    //do opposite for pointers starting at end
    
    let dummy = new ListNode(-1);
    let curr = dummy;
    
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            curr.next = l1;
            curr = curr.next;
            l1 = l1.next;
        } else {
            curr.next = l2;
            curr = curr.next;
            l2 = l2.next;
        }
    }
    //here one of the linked list is done merging because a pointer is null, so link curr to the          //pointer that is not null
    if(l1 == null){
        curr.next = l2;
    } else{
        curr.next = l1;
    }
    return dummy.next;//head 
    
    
};
