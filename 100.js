// let a = 10;
// let b = 20;

// let sum = a + b;
// console.log(`a + b = ${sum}`);

// Print the messege along with values and sum
// 	Ex - The sum of 45 & 12  = 57

// let num1 = 45;
// let num2 = 12;

// let sum = num1 + num2;
// console.log(`The sum of ${num1} & ${num2} = ${sum}`)

// ***************************************************************
// ***************************************************************

// - Accept two integers from user and print the sum
// 	Ex - The sum of 45 & 12 = 57

// let a = +prompt("enter number");
// let b = +prompt("enter number");

// let sum = a + b;
// console.log(`The sum of ${a} & ${b} = ${sum}`);

// ******************************************************************
// ******************************************************************


// 4- Accept the User's name, age and print in following manner
// 	Ex - Hello Shery, you are 12 years old.

// let name = prompt("Enter your name");
// let age = +prompt("Enter your age");
// console.log(`Hello ${name} you are ${age}`);

// ******************************************************************
// ******************************************************************

//  6- Accept two numbers from user and swap their values
//                 Part 2 - Swap without using third variable

//  let e = 12;
//  let f = 8;

//  let c = e;

//  e = f;

//   f = c;
// console.log(`${e} ${f}`) 

// without using third variable


// let a = 12;
// let b = 5;

// a = a + b;

// b = a - b;

// a = a - b; 

// console.log(a,b)


// *************************************************************
// *************************************************************

//7. Accept the length and width of a rectangle. Calculate & print the area and perimiter.

// let length = +prompt("Enter number");
// let width = +prompt("Enter number");

// let area = length * width;

// let perimiter = 2*(length + width);

// console.log(area);

// console.log(perimiter)

// *************************************************************************
// *************************************************************************

// 8- Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

let principle = +prompt("Enter number"); 
let rate = +prompt("Enter rate ");
let number = +prompt("Enter how many time in one year interest");
let time = +prompt("Enter time") 

let amount = Math.pow((1+rate/number),number*time)*principle;

let ci = amount - principle;

console.log(amount.toFixed(2));
console.log(ci.toFixed(2));






















