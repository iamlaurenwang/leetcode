// 2525. Categorize Box According to Criteria

var categorizeBox = function(length, width, height, mass) {
    
    const bulky = isBulky(length, width, height)
    const heavy = isHeavy(mass)


    if(bulky && heavy){
        return "Both"
    }else if(bulky){
        return "Bulky"
    }else if(heavy){
        return "Heavy"
    }else{
        return "Neither"
    }

    function isBulky(length, width, height){
        if(length >= 10000 || width >= 10000 || height >= 10000)return true

        const volume = length * width * height

        return volume >= 1000000000
    }


    function isHeavy(mass){
        return mass >= 100
    }
};