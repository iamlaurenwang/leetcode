// 141. Linked List Cycle

class ListNode{
    constructor(val, next){
        this.val = val
        this.next = next
    }
}

var hasCycle = function(head) {
    const mySet = new Set();
    while(head){
        if(mySet.has(head.val)){
            return true
        }else{
            mySet.add(head.val)
            head = head.next
        }
    }

    return false
};