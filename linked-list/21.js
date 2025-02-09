// 21. Merge Two Sorted Lists

class ListNode{
    constructor(val, next){
        this.val = val
        this.next = next
    }
}


function mergeTwoLists(l1, l2){
    let dummy = new ListNode(0)
    let curr = dummy // curr指向merged linked list

    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            curr.next = l1
            l1 = l1.next
        }else{
            curr.next = l2
            l2 = l2.next
        }

        curr = curr.next
    }

    if(l1 !== null){  // 接上未處理node
        curr.next = l1
    }else{
        curr.next = l2
    }

    return dummy.next

}




const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

console.log(mergeTwoLists(list1, list2))