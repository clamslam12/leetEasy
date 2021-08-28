/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head == null){
        return false;
    }
    let str = '';
    while(head != null){
        str += head.val;
        head = head.next;
    }
    
    if(str == str.split('').reverse().join('')){
        return true;
    }
    return false;
    
    
    
};
