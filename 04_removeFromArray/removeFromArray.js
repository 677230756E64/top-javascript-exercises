const removeFromArray = function(initArr, ...args) {
//    let temp;
//    for( let i = 0; i < args.length; i++){
//        temp = initArr.indexOf(args[i]);
//        if(temp >= 0) initArr.splice(temp, 1);
//    }
//    return initArr;

    return initArr.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
