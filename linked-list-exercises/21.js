// Merge Two Sorted Lists
class ListNode{
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0)
    let curr = dummy

    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            curr.next = list1
            list1 = list1.next
        }else{
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next // 指針前進
    }

    curr.next = list1 || list2

    return dummy.next
};


let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(l1, l2))