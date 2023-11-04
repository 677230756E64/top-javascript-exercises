const leapYears = function(Year) {
    return (Year%4 == 0 ? (Year%100 == 0 ? (Year%400 == 0 ? true : false) : true) : false);
};

// Do not edit below this line
module.exports = leapYears;
