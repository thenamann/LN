const greet = require("./greet"); //commonJS, we pass module in string value,
//const greet = require("./greet").greet; --> if we want the function

// use {} to destructure the object recieved rom module.

console.log(greet);
console.log({greet});
greet();