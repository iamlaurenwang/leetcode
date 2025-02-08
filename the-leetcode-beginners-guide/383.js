// 383. Ransom Note

var canConstruct = function(ransomNote, magazine) {
    let result = ransomNote
    for(let char of magazine){
        result = result.replace(char, '')
    }

    if(!result)return true

    return false
};


console.log(canConstruct('a', 'b'))