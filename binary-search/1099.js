// 1099. Two Sum Less Than K

var twoSumLessThanK = function(nums, k){
    nums.sort((a, b) => a - b)

    let results = []
    let left = 0
    let right = nums.length - 1

    while(left < right){
        let sum = nums[left] + nums[right]

        if(sum < k){
            results.push(sum)
        left += 1
        }else{
            right -= 1
        }
    }

    if(!results.length)return - 1
        
    results.sort((a, b) => b - a )
    return results[0]
}

console.log(twoSumLessThanK([34,23,1,24,75,33,54,8], 60))
console.log(twoSumLessThanK([10, 20, 30], 15))