const greet = require("./greet"); //commonJS, we pass module in string value,
//const greet = require("./greet").greet; --> if we want the function

// use {} to destructure the object recieved rom module.

const obj = require("./data.json")

console.log(greet);
console.log({greet});
greet();

console.log(obj); //gives object

