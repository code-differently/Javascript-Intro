// =========================
// PART 1: VARIABLES
// =========================

let myName = "Jamiir";
let myAge = 33;
let favoriteColor = "RED";
let likesCoding = True;

console.log(myName);
console.log(myAge);
console.log(favoriteColor);
console.log(likesCoding);

/*
What is a variable?
A variable is a container that stores data.

Difference between let and const?
let can change, const cannot.

What does console.log() do?
It prints output to the console.
*/


// =========================
// PART 2: CONDITIONALS
// =========================

// Task A
let temperature = 70;

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
let hour = 14;

if (hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

/*
What is the purpose of an if statement?
To make decisions in code.

When would you use else if?
When checking multiple conditions.

What does === check for?
It checks if values are exactly equal.
*/


// =========================
// PART 3: FUNCTIONS
// =========================

// Task A
function sayHello() {
  console.log("Hello!");
}
sayHello();

// Task B
function favoriteFood(food) {
  console.log("My favorite food is " + taco);
}
favoriteFood("taco");

// Task C
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(4, 5));

// Task D
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(6)); // true

/*
Why are functions useful?
They let us reuse code.

What is a parameter?
A value passed into a function.

Difference between console.log() and return?
console.log prints, return gives back a value.
*/


// =======================
// PART 4: LOOPS
// =======================

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

/*
What is a loop used for?
To repeat code.

When use a for loop?
When you know how many times to repeat.

What happens if condition never becomes false?
Infinite loop.
*/


// =========================
// PART 5: MINI CHALLENGES
// =========================

// Mini Challenge 1
function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
checkNumber(-5);

// Mini Challenge 2
function countdown(num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}
countdown(5);

// Mini Challenge 3
let studentName = "Jamiir";
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

// Mini Challenge 4 (Array version)
let students = ["John", "Sarah", "Mike", "Emma", "Chris"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}


// =========================
// STRETCH CHALLENGES
// =========================

// Stretch 1
function gradeCalculator(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
console.log(gradeCalculator(88));

// Stretch 2
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Stretch 3
function repeatName(name, times) {
  for (let i = 0; i < times; i++) {
    console.log(name);
  }
}
repeatName("Jamiir", 3);

// Stretch 4
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

for (let i = 0; i < 10; i++) {
  evenOrOdd(7);
}


// =========================
// REFLECTION QUESTIONS
// =========================

/*
Which topic felt easiest?
Variables were the easiest.

Which topic felt most challenging?
Loops can be tricky at first.

How do they work together?
Variables store data, conditionals make decisions,
functions organize code, loops repeat actions.

What is one question you still have?
(When should I use return instead of console.log() in a function?)
*/

