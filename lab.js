
let name = "James Barclay";
let age = 34;
let favoriteColor = "Green";
let likesCoding = true;

console.log(name);
console.log(age);
console.log(favoriteColor);
console.log(likesCoding);

// What is a variable?
// A variable is a container that stores data.

// Difference between let and const:
// let can change, const cannot.

// What does console.log() do?
// It prints information to the console.


let temperature = 55;

if (temperature < 55) {
  console.log("It is cold.");
} else {
  console.log("It is warm.");
}

let password = "jb54321";

if (password === "jb54321") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}


let hour = 10;

if (hour < 10) {
  console.log("Good morning");
} else if (hour >= 10 && hour <= 17) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// What is the purpose of an if statement?
// To make decisions in code.

// When would you use else if?
// When you have multiple conditions.

// What does === check for?
// It checks if values are equal and same type.



function sayHello() {
  console.log("Hello!");
}
sayHello();

function favoriteFood(pasta) {
  console.log("My favorite food is " + food);
}
favoriteFood("wings");


function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(4, 5));


function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(6));

// Why are functions useful?
// They let us reuse code.

// What is a parameter?
// A value passed into a function.

// Difference between console.log() and return:
// console.log prints, return gives back a value.



// Task A
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
for (let i = 0; i < 5; i++) {
  console.log("Practice makes progress");
}

// What is a loop used for?
// To repeat code.

// When might you use a for loop?
// When you know how many times to repeat.

// What could happen if a loop never ends?
// Infinite loop.

// Challenge 1
function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
checkNumber(-3);

// Challenge 2
function countdown(num) {
  while (num >= 1) {
    console.log(num);
    num--;
  }
}
countdown(5);

// Challenge 3
let studentName = "Jordan";
let score = 85;

function checkScore(score) {
  if (score >= 90) {
    console.log("Excellent work");
  } else if (score >= 75) {
    console.log("Good job");
  } else {
    console.log("Keep practicing");
  }
}
checkScore(score);



// Reflection Questions
// Which topic felt easiest for you?
// The Variables was the easiest.

// Which topic felt most challenging?
// Doing the Loops

// How do they work together?
// Variables store data and conditionals make decisions,
// functions organize code, and loops repeat actions.

// What is one question you still have?
// How can I debug my code faster?