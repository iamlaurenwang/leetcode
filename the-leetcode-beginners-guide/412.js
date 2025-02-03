function fizzBuzz(n){
    const ans = []
    let i = n
    while(i > 0){

        if(i % 3 === 0 && i % 5 === 0){
            ans.push("FizzBuzz")
        }else if(i % 3 === 0){
            ans.push("Fizz")
        }else if( i % 5 === 0){
            ans.push("Buzz")
        }else{
            ans.push(i.toString())
        }


        i--
    }
    return ans.reverse()
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
console.log(fizzBuzz(13))