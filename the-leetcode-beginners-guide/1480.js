var runningSum = function(nums) {
    const result = nums.map((item, index, arr) =>{
        let i = index
        let sum = 0
        while(i >= 0){
            sum += arr[i]
            i--
        }

        return sum
    })

    return result

};

console.log(runningSum([1,2,3,4]))