function numberOfSteps(num){
    let count = 0
    let target = num 
   
    while( target !== 0){
        if(target % 2 === 0){
            target = target / 2
        }else{
            target--
        }

        count++
    }

    return count
}

console.log(numberOfSteps(14))
console.log(numberOfSteps(8))