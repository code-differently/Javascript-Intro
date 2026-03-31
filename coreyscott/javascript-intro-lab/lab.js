//Part 1-VARIABLES

let userName = "Walter White";
let age= 41;
let favoriteColor = "purple"
let likeCoding = true;

console.log(userName);
console.log(age);
console.log(favoriteColor);
console.log(likeCoding);

//Question 1...What is a variable?
//Answer 1...a variable stores data

//Question 2...What is the difference between let and const?
//Answer 2..."let" can be changed, "const" cannot be changed

//Question 3...What does console.log() do?
//Answer 3..it prints the data to the console

//Part 2-CONDITIONALS

// Temperature
let temperature = 70;

if (temperature < 60) {
  console.log("It is cold.");
} else {
  console.log("It is warm.");
}

// Password
let password = "codediff26.1";

if (password === "codediff26.1") {
  console.log("Access GRANTED");
} else {
  console.log("Access DENIED");
}

// Time of day
let hour = 14;

if (hour < 12) {
  console.log("Good morning");
} else if (hour <= 17) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

//Question 1...What is the purpose of an if statement?
//Answer 1..."if" statements are about decision making

//Question 2...When would you use else if?
//Answer 2...the "else if" is for multiple conditions

//Question 3...What does === check for?
//Answer 3..the "===" check for exact conditions

//Part 3-FUNCTIONS

function sayHello() {
  console.log("Hello!");
}

sayHello();

function favoriteFood(food) {
  console.log("My favorite food is " + food);
}

favoriteFood("Tacos");

function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));

//Question 1...Why are functions useful?
//Answer 1..."functions" can reuse code

//Question 2...What is a parameter?
//Answer 2...a "parameter" = input to function

//Question 3...What is the difference between console.log() and return?
//Answer 3...a "return" gives back a value, a "console.log" just prints it out

//Part 4-LOOPS

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}

for (let i = 0; i < 5; i++) {
  console.log("Practice makes progress");
}

//Question 1...What is a loop used for?
//Answer 1...to repeat code multiple times

//Question 2...When might you use a for loop?
//Answer 2..when you know you want to repeat something multiple times

//Question 3...What could happen if a loop condition never becomes false?
//Answer 3...the loop will just keep repeating

//Mini Challenge #1

function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

checkNumber(25);
checkNumber(-3);
checkNumber(0);

//Mini Challenge #2

function countdown(num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}

countdown(10);

//Mini Challenge #3

let studentName = "Larry";
let score = 92;

function checkProgress(score) {
  if (score >= 90) {
    console.log("Excellent work");
  } else if (score >= 75) {
    console.log("Good job");
  } else {
    console.log("Keep practicing");
  }
}

console.log("Student:", studentName);
checkProgress(score);

//Mini Challenge #4

let students = ["Magic", "Larry", "Allen", "Steve", "Steph"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}



