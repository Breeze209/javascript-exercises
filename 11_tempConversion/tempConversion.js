const convertToCelsius = function(fah) {
  let inCelsius = (fah -32) * (5 / 9);
  inCelsius = Math.round(inCelsius * 10) / 10;
  return inCelsius;
};

const convertToFahrenheit = function(cel) {
  let inFahrenheit = (cel * (9 / 5)) +32;
  inFahrenheit = Math.round(inFahrenheit *10) / 10;
  return inFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
