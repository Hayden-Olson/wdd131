// This is case sensitive. If you use caps, then you need to use the caps whenever referring to the value.
const PI = 3.14;
let radius = 3;

// You can set up an initial value to just establish the variable first, or just establish the variable with its function like below.
let area = 0;

// let area = radius * radius * PI;
area = radius * radius * PI;

console.log(area);

radius = 20;
area = radius * radius * PI;
console.log(area);

// type coersion
const one = 1;
const two = 2;

let result = one * two;
console.log(result);

// const two = '2';
// result = one + Number(two);
// console.log(result)

// scope
let global = "I'm global";

// How to set up a function in JS.
function exampleFunction() {
    let block = "I am a block level or local"
    console.log(block)
    console.log(global)
}

// This block will not display. It was set up in a function.
// console.log(block)
// Also code will fail to work beyond an error. Fix errors or comment out problems to see the rest of the code.

// This global will display because it is a global function, established outside of a function.
console.log(global)
exampleFunction()

// Beware of misspellings like this.
// globle = "I am also global";
// console.log(globle)