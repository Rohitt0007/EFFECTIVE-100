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

// let principle = +prompt("Enter number"); 
// let rate = +prompt("Enter rate ");
// let number = +prompt("Enter how many time in one year interest");
// let time = +prompt("Enter time") 

// let amount = Math.pow((1+rate/number),number*time)*principle;

// let ci = amount - principle;

// console.log(amount.toFixed(2));
// console.log(ci.toFixed(2));


//**********************************************************************
//**********************************************************************

// 9- Accept the three sides of triangle and calculate the area using herons formula.

// let a = +prompt("Enter side");
// let b = +prompt("Enter side");
// let c = +prompt("Enter side");

// let paremeter = (a + b + c)/2

// let area = Math.sqrt(paremeter*(paremeter - a)*(paremeter - b)*(paremeter - c));

// console.log(area);

// 10- Find surface area of sphere

// let redius = +prompt("Enter number");

// let sArea = 4 * Math.PI * Math.pow(redius, 2)

// console.log(sArea);

//11. Find circumference and area of circle

// let radius = +prompt("Enter number");

// let circu = 2*Math.PI*radius

// let area = Math.PI*radius*radius;
// // let area = Math.PI*Math.pow(radius,2);

// console.log(circu.toFixed(2));
// console.log(area.toFixed(2));

// 12- Accept two numbers and print the greatest between them

// let a = +prompt("Enter number");
// let b = +prompt("Enter number");

// if(a > b ){
//     console.log("a is greater than b", a);.
// }else if(b > a){
//     console.log("b is greater than a", b);
// }

//13- Accept the gender from the user as char and print the respective greeting message
//       Ex - Good Morning Sir (on the basis of gender)

// let gender = prompt("Enter your gender");
// if(gender == "m" || gender == "M"){
//     console.log("Good morning Sir");
// }else if(gender == "f" || gender == "F"){
//     console.log("Good morning MaM")
// }

// 14- Extend the previous program and handle the wrong inputs.
//       Print Good Morning sir for input m or M & Good morning Maam for input F or f 
//       else print Wrong Input

// let gender = prompt("Enter your gender");
// if(gender == "m" || gender == "M"){
//     console.log("Good morning Sir");
// }else if(gender == "f" || gender == "F"){
//     console.log("Good morning MaM")
// }else{
//     console.log("wrong Inputs");
// }

// 15- Accept an integer and check whether it is an even number or odd

// let num = +prompt("Enter number");
// if(num % 2 == 0){
//     console.log(`Number is Even ${num}`);
// }else if(num % 2 != 0){
//     console.log(`Number is Odd ${num}`);
// }

// 16- Accept name and age from the user. Check if the user is a valid voter or not.
//       Valid - Hello Shery, You are a valid voter.
// Part 2 - Print after how many years the user will be eligible

// let name = prompt("Enter Your Name");
// let age = +prompt("Enter Your Age");

// if(age > 18){
//     console.log(`Hello ${name} you are a valid voter`)
// }else{
//     console.log(`Sorry ${name} you can't vote`)
//     let wait = 18 - age;
//     console.log(`You can vote after ${wait}`)
// }

// 17- Accept a day number between 1-7 and print the corresponding dayname.

// let day = +prompt("Enter days");
// if(day == 1){
//     console.log("Monday")
// }else if(day == 2){
//     console.log("Tuesday")
// }else if(day == 3){
//     console.log("Wednesday")
// }else if(day == 4){
//     console.log("Thursday")
// }else if(day == 5){
//     console.log("Friday")
// }else if(day == 6){
//     console.log("Satturday")
// }else if(day == 7){
//     console.log("Sunday")
// }else{
//     console.log("Enter valid number")
// }


// 18- Accept three numbers and print the greatest among them.

// let a = +prompt("Enter number A");
// let b = +prompt("Enter number B");
// let c = +prompt("Enter number C");

// if(a > b && a > c){
//     console.log(`A is greater than B & C`);
// }else if(b > a && b > c){
//     console.log(`B is greater than A & C`);
// }else if(c > a && c > b){
//     console.log(`C is greater than A & B`);
// }else{
//     console.log("Enter valid Number");
// }

// 19- Accept a year and check if it a leap year or not (google to find out what's a leap year)

let year = +prompt("Enter Year");
if(year % 4 == 0 || year % 4 == 0 && year % 100 != 0){
    console.log(`${year} this is leap year`)
}else{
    console.log(`${year} it's not a leap year `)
}















