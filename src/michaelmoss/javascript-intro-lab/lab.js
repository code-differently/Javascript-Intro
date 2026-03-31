// JavaScript Introduction Lab - Completed

// =============================
// Part 1: Variables
// =============================
const myName = "Michael Moss";
let myAge = 30;
const favoriteColor = "Blue";
const likesCoding = true;

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Favorite Color:", favoriteColor);
console.log("Likes Coding:", likesCoding);

// Check for Understanding (Part 1)
// 1. A variable is a named container that stores data.
// 2. let allows reassignment; const does not allow reassignment.
// 3. console.log() prints output to the console.

// =============================
// Part 2: Conditionals
// =============================
const temperature = 72;

if (temperature < 60) {
	console.log("It is cold.");
} else {
	console.log("It is warm.");
}

const password = "javascript123";

if (password === "javascript123") {
	console.log("Access granted");
} else {
	console.log("Access denied");
}

const hour = 15;

if (hour < 12) {
	console.log("Good morning");
} else if (hour <= 17) {
	console.log("Good afternoon");
} else {
	console.log("Good evening");
}

// Check for Understanding (Part 2)
// 1. An if statement runs code only when a condition is true.
// 2. Use else if when checking multiple conditions in order.
// 3. === checks strict equality (same value and same type).

// =============================
// Part 3: Functions
// =============================
function sayHello() {
	console.log("Hello, welcome to JavaScript.");
}

function favoriteFood(food) {
	console.log("My favorite food is " + food + ".");
}

function multiply(num1, num2) {
	return num1 * num2;
}

function isEven(number) {
	return number % 2 === 0;
}

sayHello();
favoriteFood("Pizza");
console.log("Multiply 6 x 7:", multiply(6, 7));
console.log("Is 10 even?:", isEven(10));
console.log("Is 9 even?:", isEven(9));

// Check for Understanding (Part 3)
// 1. Functions are useful because they let you reuse logic.
// 2. A parameter is an input variable for a function.
// 3. console.log prints a value; return sends a value back from a function.

// =============================
// Part 4: Loops
// =============================
console.log("Numbers 1 through 10:");
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

console.log("Even numbers 2 through 20:");
for (let i = 2; i <= 20; i += 2) {
	console.log(i);
}

console.log("Countdown from 5 to 1:");
let count = 5;
while (count >= 1) {
	console.log(count);
	count--;
}

console.log("Practice message 5 times:");
for (let i = 1; i <= 5; i++) {
	console.log("Practice makes progress");
}

// Check for Understanding (Part 4)
// 1. A loop repeats a block of code.
// 2. Use a for loop when you know how many times to repeat.
// 3. If the condition never becomes false, the loop can run forever.

// =============================
// Part 5: Combine Everything
// =============================

// Mini Challenge 1: Number Checker
function checkNumber(num) {
	if (num > 0) {
		console.log(num + " is positive");
	} else if (num < 0) {
		console.log(num + " is negative");
	} else {
		console.log("The number is zero");
	}
}

checkNumber(10);
checkNumber(-4);
checkNumber(0);

// Mini Challenge 2: Countdown Function
function countdown(start) {
	for (let i = start; i >= 1; i--) {
		console.log(i);
	}
}

console.log("Countdown from 7:");
countdown(7);

// Mini Challenge 3: Student Progress Checker
const studentName = "Michael";
const score = 88;

function checkStudentProgress(name, currentScore) {
	if (currentScore >= 90) {
		console.log(name + ": Excellent work");
	} else if (currentScore >= 75) {
		console.log(name + ": Good job");
	} else {
		console.log(name + ": Keep practicing");
	}
}

checkStudentProgress(studentName, score);

// Mini Challenge 4: Class Roster
const classRoster = ["Ava", "Noah", "Liam", "Emma", "Sophia"];

console.log("Class Roster:");
for (let i = 0; i < classRoster.length; i++) {
	console.log(classRoster[i]);
}

// =============================
// Reflection Questions
// =============================
// 1. Which topic felt easiest for you?
//    variables felt easiest because they make code organized and reusable.
// 2. Which topic felt most challenging?
//    Conditionals with multiple branches can be challenging at first.
// 3. How do variables, conditionals, functions, and loops work together in a program?
//    Variables store data, conditionals make decisions, functions organize reusable logic,
//    and loops repeat logic to process data efficiently.
// 4. What is one question you still have about JavaScript?
//    How do asynchronous functions (async/await) work in real applications?

