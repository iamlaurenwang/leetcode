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


class ListNode{
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}



var middleNode = function(head) {
    let listLen = 0
    let curr = head

    while(curr){ // curr.next !== null: 會少算最後一個節點
        listLen += 1
        curr = curr.next
    }

    let mid = Math.floor(listLen / 2)
    curr = head
    for(let i = 0; i < mid; i++){
        curr = curr.next
    }

    return curr
};

// concept: 找出中間點 + override head value

const h1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
console.log(middleNode(h1))

const h2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
console.log(middleNode(h2))