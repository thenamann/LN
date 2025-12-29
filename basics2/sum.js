
function sum (a, b) {
    return a+b;
}

function greetWithSum(text, a, b, sum) {
    const result = sum(a,b);
    console.log(text, result);
}

greetWithSum("hi this is text + sum ==", 100, 200, sum);
