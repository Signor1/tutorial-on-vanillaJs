//Data type of number

let x = 23; //integer
let y = 0.00652; //floating point number

//using exponents
let e = 278e5; //27800000
let a = 45e-4; //0.0045

let z = 0.2 + 0.1;
console.log(z);

// Except (+) operator, (-, *, /) can execute even when it a string is there
let b = "100";
let c = 50;
let d = b / c;
console.log(d);

let f = 200 * "hello"; //return NaN
console.log(isNaN(f));
// isNaN() is a function that checks if a value is a number or not

let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}

console.log(myNumber);

let my = 32;
console.log(my.toString(2));

let son = Number("656");
console.log(typeof son);

let me = 345;
let str = me + "";
console.log(typeof str);

// = assignment operator
// == equality
// === identity

// Bolean Data type
let isLoggedIn = true;
let offline = false;

let demo = "433.087543";
console.log(parseInt(demo));
