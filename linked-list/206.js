// 206. Reverse Linked List

class ListNode{
    constructor(val, next){
        this.val = val
        this.next = next
    }
}


var reverseList = function(head) {
    let prev = null
    let curr = head

    while(curr !== null){
        let next = curr.next // 暫存節點
        curr.next = prev // reverse
        prev = curr // pre前進
        curr = next // curr前進
    }

    return prev
}