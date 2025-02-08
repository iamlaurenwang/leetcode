// 876. Middle of the Linked List

 class LiseNodeTS {
     val: number
     next: LiseNodeTS | null
     constructor(val?: number, next?: LiseNodeTS | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

 function middleNodeTS(head: LiseNodeTS | null): LiseNodeTS | null {
    let nodeLen = 0
    let curr = head

    while(curr){
        curr = curr.next
        nodeLen++
    }

    if(curr)nodeLen++

    let middle = Math.floor(nodeLen / 2)

    let i = 0
    while(i !== middle){
        if(head)head = head.next
        i++
    }
    return head
 };



 const h1 = new LiseNodeTS(1, new LiseNodeTS(2, new LiseNodeTS(3, new LiseNodeTS(4, new LiseNodeTS(5)))))
 console.log(middleNodeTS(h1))

 const h2 = new LiseNodeTS(1, new LiseNodeTS(2, new LiseNodeTS(3, new LiseNodeTS(4, new LiseNodeTS(5, new LiseNodeTS(6))))))
console.log(middleNodeTS(h2))
