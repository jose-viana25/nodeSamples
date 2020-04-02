const canadianDollar = 0.91;


function roundTwo(amount){
    return Math.round(amount * 100) / 100;
}

exports.canadianToUs = canadian => roundTwo(canadian * canadianDollar);
exports.UsToCanadian = us => roundTwo(us / canadianDollar);