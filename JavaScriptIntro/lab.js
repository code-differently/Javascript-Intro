// JavaScript Introduction Lab
// Student Name: Kenneth Edelin

// ==================================================
// Part 1: Variables
// ==================================================

// Practice 1: Create Variables
let userName = "Kenneth Edelin";
let age = 26;
let favoriteColor = "Blue";
let likesCoding = true;

// Print variables
console.log("Name:", userName);
console.log("Age:", age);
console.log("Favorite Color:", favoriteColor);
console.log("Likes Coding:", likesCoding);

// Check for Understanding
// What is a variable?
// A variable is a named container that stores data.

// What is the difference between let and const?
// let can be changed later, const cannot be reassigned.

// What does console.log() do?
// console.log() prints information to the console.

// ==================================================
// Part 2: Conditionals
// ==================================================

// Task A
let temperature = 72;

if (temperature < 60) {
  console.log("It is cold.");
} else {
  console.log("It is warm.");
}

// Task B
let password = "javascript123";

if (password === "javascript123") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Task C
let hour = 15;

if (hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// Check for Understanding
// What is the purpose of an if statement?
// An if statement helps a program make decisions based on conditions.

// When would you use else if?
// You use else if when you want to check another condition after the first one is false.

// What does === check for?
// It checks if two values are exactly equal in both value and type.

// ==================================================
// Part 3: Functions
// ==================================================

// Task A
function sayHello() {
  console.log("Hello, welcome to JavaScript!");
}

sayHello();

// Task B
function favoriteFood(food) {
  console.log("My favorite food is " + food + ".");
}

favoriteFood("pizza");

// Task C
function multiply(num1, num2) {
  return num1 * num2;
}

let product = multiply(6, 7);
console.log("Product:", product);

// Task D
function isEven(number) {
  return number % 2 === 0;
}

console.log("Is 8 even?", isEven(8));
console.log("Is 5 even?", isEven(5));

// Check for Understanding
// Why are functions useful?
// Functions are useful because they let you reuse code instead of repeating it.

// What is a parameter?
// A parameter is a value a function receives to work with.

// What is the difference between console.log() and return?
// console.log() prints a value, while return sends a value back from the function.

// ==================================================
// Part 4: Loops
// ==================================================

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
for (let i = 1; i <= 5; i++) {
  console.log("Practice makes progress");
}

// Check for Understanding
// What is a loop used for?
// A loop is used to repeat code multiple times.

// When might you use a for loop?
// You use a for loop when you know how many times you want to repeat something.

// What could happen if a loop condition never becomes false?
// The loop could run forever and create an infinite loop.

// ==================================================
// Part 5: Combine Everything
// ==================================================

// Mini Challenge 1: Number Checker
function numberChecker(number) {
  if (number > 0) {
    console.log(number + " is positive.");
  } else if (number < 0) {
    console.log(number + " is negative.");
  } else {
    console.log(number + " is zero.");
  }
}

numberChecker(10);
numberChecker(-3);
numberChecker(0);

// Mini Challenge 2: Countdown Function
function countdown(startNumber) {
  let current = startNumber;

  while (current >= 1) {
    console.log(current);
    current--;
  }
}

countdown(5);

// Mini Challenge 3: Student Progress Checker
let studentName = "Kenneth Edelin";
let score = 88;

function checkStudentProgress(name, studentScore) {
  if (studentScore >= 90) {
    console.log(name + ": Excellent work");
  } else if (studentScore >= 75) {
    console.log(name + ": Good job");
  } else {
    console.log(name + ": Keep practicing");
  }
}

checkStudentProgress(studentName, score);

// Mini Challenge 4: Class Roster
let student1 = "Kenneth";
let student2 = "Jordan";
let student3 = "Taylor";
let student4 = "Chris";
let student5 = "Morgan";

let roster = [student1, student2, student3, student4, student5];

for (let i = 0; i < roster.length; i++) {
  console.log("Student:", roster[i]);
}

// ==================================================
// Stretch Challenges
// ==================================================

// Stretch 1
function gradeCalculator(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Grade:", gradeCalculator(93));
console.log("Grade:", gradeCalculator(76));
console.log("Grade:", gradeCalculator(58));

// Stretch 2
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Stretch 3
function printNameTimes(name, times) {
  for (let i = 1; i <= times; i++) {
    console.log(name);
  }
}

printNameTimes("Kenneth Edelin", 3);

// Stretch 4
function oddOrEvenRepeated(number) {
  let result;

  if (number % 2 === 0) {
    result = number + " is even.";
  } else {
    result = number + " is odd.";
  }

  for (let i = 1; i <= 10; i++) {
    console.log(result);
  }
}

oddOrEvenRepeated(7);

// ==================================================
// Reflection Questions
// ==================================================

// Which topic felt easiest for you?
// Variables felt easiest because they are simple containers for storing information.

// Which topic felt most challenging?
// Functions and loops together can be challenging because they require more planning.

// How do variables, conditionals, functions, and loops work together in a program?
// Variables store data, conditionals make decisions, functions organize reusable code,
// and loops repeat actions when needed.

// What is one question you still have about JavaScript?
// How do arrays and objects work in bigger JavaScript programs?