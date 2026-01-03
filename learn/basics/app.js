let a;
let b;

a=5;
b=6;
console.log(a+b);


function greet() { //creating a function
    console.log("hello from node");
}

greet();//calling that function

//functions are first class
//we can pass function as a parameter in another function.

function logGreeting(fn) {
    fn();
}

logGreeting(greet);

//function expression: assigning a funtion into a variable;

const fn = function(){
    console.log("funtion expression");
}
fn();

//use the function expression on the fly

logGreeting(function() {
    console.log("function expression 2");
});

logGreeting;



