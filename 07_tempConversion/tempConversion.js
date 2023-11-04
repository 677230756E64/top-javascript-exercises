const convertToCelsius = function(Ftemp) {
  return +((Ftemp-32)*5/9).toFixed(1);
};

const convertToFahrenheit = function(Ctemp) {
  return +(Ctemp*1.8+32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
