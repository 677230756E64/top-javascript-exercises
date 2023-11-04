const repeatString = function(repStr, repNum) {
    if(repNum < 0) return 'ERROR';
    
    let result = '';
    return result.padStart(repStr.length*repNum, repStr);
};

// Do not edit below this line
module.exports = repeatString;
