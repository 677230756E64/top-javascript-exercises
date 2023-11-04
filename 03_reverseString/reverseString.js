const reverseString = function(origStr) {
    let revStr = '';
    let origLen = origStr.length;
    
    while(origLen > 0){
        revStr+= origStr[--origLen];
    }
    
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
