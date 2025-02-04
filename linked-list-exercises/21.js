// Merge Two Sorted Lists
class ListNode{
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var mergeTwoLists = function(list1, list2) {
    let head1 = list1.val
    let head2 = list2.val
    const ans = new ListNode()

    while(head1){
        if(head1 === head2){
            ans.val = head1
            ans.next = new ListNode(head2, undefined)
        }else if(head1 < head2){
            ans.val = head1
            ans.next = new ListNode(head2, undefined)
        }else if( head1 > head2 ){
            ans.val = head2
            ans.next = new ListNode(head1, undefined)
        }


        if(head1.next){
            head1 = head1.next
        }

        if(head2.next){
            head2 = head2.next
        }
        
    }
   
    return ans
};


const l1 = new ListNode(1, new ListNode(2, new ListNode(4, undefined)))
const l2 = new ListNode(1, new ListNode(3, new ListNode(4, undefined)))

console.log(mergeTwoLists(l1, l2))