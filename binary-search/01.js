// 1. Two Sum

var twoSum = function(nums, target) {    
    let left = 0
    let right = nums.length - 1

    while( left < right ){

        let result = nums[left] + nums[right]

        if(result === target){
            return [left, right]
        }else if(result < target){
            left += 1
        }else{
            right -= 1
        }
    }

    return []

}

console.log(twoSum([2,7,11,15], 9))
