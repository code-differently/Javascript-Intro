// JavaScript Introduction Lab
// Maxx Blue

// ======================================================
// Part 1: Variables
// ======================================================

// A variable stores information that can be used later in the program.
let myName = "Maxx";
let myAge = 28;
let favoriteColor = "Blue";
let likesCoding = true;

// Print the variables
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Favorite Color:", favoriteColor);
console.log("Likes Coding:", likesCoding);

// Check for Understanding
// 1. What is a variable?
// A variable is a named container that stores data.

// 2. What is the difference between let and const?
// let can be changed later, const cannot be changed after it is created.

// 3. What does console.log() do?
// console.log() prints information to the console.

console.log("================================");

// ======================================================
// Part 2: Conditionals
// ======================================================

// Task A
let temperature = 55;

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
// 1. What is the purpose of an if statement?
// An if statement helps the program make decisions.

// 2. When would you use else if?
// You use else if when you want to check another condition after the first one is false.

// 3. What does === check for?
// It checks whether two values are exactly equal.

console.log("================================");

// ======================================================
// Part 3: Functions
// ======================================================

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

let product = multiply(4, 5);
console.log("Product:", product);

// Task D
function isEven(number) {
  return number % 2 === 0;
}

console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));

// Check for Understanding
// 1. Why are functions useful?
// Functions are useful because they let us reuse code instead of rewriting it.

// 2. What is a parameter?
// A parameter is a value a function receives.

// 3. What is the difference between console.log() and return?
// console.log() prints a value, while return sends a value back from a function.

console.log("================================");

// ======================================================
// Part 4: Loops
// ======================================================

// Task A
console.log("Numbers 1 through 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("----------");

// Task B
console.log("Even numbers from 2 to 20:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log("----------");

// Task C
console.log("Countdown from 5 to 1:");
let count = 5;

while (count >= 1) {
  console.log(count);
  count--;
}

console.log("----------");

// Task D
console.log('"Practice makes progress" five times:');
for (let i = 1; i <= 5; i++) {
  console.log("Practice makes progress");
}

// Check for Understanding
// 1. What is a loop used for?
// A loop is used to repeat code multiple times.

// 2. When might you use a for loop?
// You use a for loop when you know how many times you want to repeat something.

// 3. What could happen if a loop condition never becomes false?
// The loop could run forever and create an infinite loop.

console.log("================================");

// ======================================================
// Part 5: Combine Everything
// ======================================================

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

console.log("----------");

// Mini Challenge 2: Countdown Function
function countdown(startNumber) {
  for (let i = startNumber; i >= 1; i--) {
    console.log(i);
  }
}

countdown(5);

console.log("----------");

// Mini Challenge 3: Student Progress Checker
let studentName = "Maxx";
let score = 88;

function checkStudentProgress(name, studentScore) {
  console.log("Student:", name);

  if (studentScore >= 90) {
    console.log("Excellent work");
  } else if (studentScore >= 75) {
    console.log("Good job");
  } else {
    console.log("Keep practicing");
  }
}

checkStudentProgress(studentName, score);

console.log("----------");

// Mini Challenge 4: Class Roster
let classRoster = ["Jordan", "Taylor", "Chris", "Morgan", "William"];

console.log("Class Roster:");
for (let i = 0; i < classRoster.length; i++) {
  console.log(classRoster[i]);
}

console.log("================================");

// ======================================================
// Stretch Challenges
// ======================================================

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

console.log("Grade for 95:", gradeCalculator(95));
console.log("Grade for 82:", gradeCalculator(82));
console.log("Grade for 67:", gradeCalculator(67));

console.log("----------");

// Stretch 2
console.log("Numbers from 1 to 30 divisible by 3:");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

console.log("----------");

// Stretch 3
function printNameTimes(name, times) {
  for (let i = 1; i <= times; i++) {
    console.log(name);
  }
}

printNameTimes("William", 3);

console.log("----------");

// Stretch 4
function oddOrEven(number) {
  if (number % 2 === 0) {
    return number + " is even.";
  } else {
    return number + " is odd.";
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(oddOrEven(i));
}

console.log("================================");

// ======================================================
// Reflection Questions
// ======================================================

// 1. Which topic felt easiest for you?
// Variables felt easiest for me.

// 2. Which topic felt most challenging?
// Loops can be the most challenging because it is easy to make mistakes with conditions.

// 3. How do variables, conditionals, functions, and loops work together in a program?
// Variables store data, conditionals make decisions, functions organize code into reusable blocks,
// and loops repeat actions. Together they help build useful programs.

// 4. What is one question you still have about JavaScript?
// How do arrays and objects work in bigger programs?