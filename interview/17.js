var letterCombinations = function(digits) {
    if(digits.length === 0)return []

    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    let ans = [""]

    for(const digit of digits){
        let letters = map[digit]
        let queue = []

        for(const combination of ans){
            for(const letter of letters){
                queue.push(combination + letter)
            }
        }
        ans = queue
    }

    return ans

};


console.log(letterCombinations("23"))