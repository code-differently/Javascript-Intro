 
 

 
// Part 1: Variables
 

let myName = "Derwin";
let myAge = 20;
let favoriteColor = "Blue";
let likesCoding = true;

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Favorite Color:", favoriteColor);
console.log("Likes Coding:", likesCoding);

 let temp = 90;

 if(temp > 70){
    console.log("Wear a sweater its ", temp);
 }
 else{
    console.log("dress regular")
 }


 let password = "password123";
 
 if(password === "password123"){
    console.log("Access granted");
 }
 else{
    console.log("Access denied");
 }

 let hour = 14;
 
 if(hour < 12){
    console.log("Good morning");
 }
 else if(hour < 18 && hour >= 12){
    console.log("Good afternoon");
 }
 else{
    console.log("Good evening");
 }

 function sayHello() {
  console.log("Hello, welcome to JavaScript.");
}

sayHello();

 function greet(name){
    console.log("Hello, " + name + "!");
 }

 greet("Derwin");

 function multiply(num1, num2) {
  return num1 * num2;
}

let product = multiply(4, 5);
console.log("Product:", product);

function isEven(number) {
  return number % 2 === 0;
}

console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task B
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Task C
let count = 5;

while (count >= 1) {
  console.log(count);
  count--;
}

// Task D
for (let i = 1; i <= 5; i++) {
  console.log("Practice makes progress");
}

 

// Mini Challenge 1: Number Checker
function numberChecker(num) {
  if (num > 0) {
    console.log(num + " is positive.");
  } else if (num < 0) {
    console.log(num + " is negative.");
  } else {
    console.log(num + " is zero.");
  }
}

numberChecker(10);
numberChecker(-3);
numberChecker(0);

// Mini Challenge 2: Countdown Function
function countdown(number) {
  while (number >= 1) {
    console.log(number);
    number--;
  }
}

countdown(5);