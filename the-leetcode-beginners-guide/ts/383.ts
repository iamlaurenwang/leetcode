// 383. Ransom Note

function canConstructTS(ransomNote: string, magazine: string): boolean {
    let result = ransomNote
    for(let char of magazine){
        result = result.replace(char, '')
    }

    if(!result)return true

    return false
};