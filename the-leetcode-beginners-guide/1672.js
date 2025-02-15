var maximumWealth = function(accounts) {
    const sums = accounts.map((item)=>{
        return item.reduce((sum, item) => sum += item)
    })

    //return sums.sort((a, b) => b - a)[0]
    // 也可以使用Math.max()
    return Math.max(...sums)
};

console.log(maximumWealth([[1,2,3], [1]]))