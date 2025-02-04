// Remove Duplicates from Sorted List

class ListNode{
    constructor(val = 0, next = null){
        this.val = val
        this.next = next
    }
}

var deleteDuplicates = function(head) {
   let curr = head

   while(curr !== null && curr.next !== null){
    if(curr.val === curr.next.val){
        curr.next = curr.next.next // igore repeated node
    }else{
        curr = curr.next // move pointer
    }
   }

   return head
};

let h1 = new ListNode(1, new ListNode(1, new ListNode(2)))
// console.log(deleteDuplicates(h1))
let h2 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))))
console.log(deleteDuplicates(h2))