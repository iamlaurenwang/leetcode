function numberOfSteps(num: number): number{
    if(!num || num === 0) return 0

    let steps = 0
    let target = num

    while(target !== 0){
        if(target % 2 === 0){
            target = target /2
        }else{
            target -= 1
        }

        steps++
    }


    return steps
}



console.log(numberOfSteps(14)) // expect 6
console.log(numberOfSteps(8)) // expect 4