function numberOfSteps(num: number): number{
    if(num === 0) return 0

    let steps = 0
    let current = num

    while(current !== 0){
        if(current % 2 === 0){
            current = current /2
        }else{
            current -= 1
        }

        steps++
    }
    return steps
}



console.log(numberOfSteps(14)) // expect 6
console.log(numberOfSteps(8)) // expect 4