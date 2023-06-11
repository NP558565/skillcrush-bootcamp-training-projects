//Create a variable named tempCelsius with a value of 10 (use the number data type).
var tempCelsius = 10;
//Create a variable named toFahrenheit.
//The value of the toFahrenheit variable should be an expression that multiplies the value of the tempCelsius variable with 1.8 and then adds 32.
var toFahrenheit = tempCelsius * 1.8 + 32;
//Use a template literal to output the following message: “Outside my friend’s house it’s X°C, which is X°F.” Note: the X’s are placeholders for your values.
console.log(
  `Outside my friend's house it's ${tempCelsius} degrees Celsius, which is ${toFahrenheit} degrees Fahrenheit.`
);