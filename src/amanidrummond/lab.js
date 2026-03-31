// =======================
// Part 1: Variables
// =======================


let name = "Amani";
let age = 27;
let favoriteColor = "Pink";
let likesCoding = true;


console.log(name);
console.log(age);
console.log(favoriteColor);
console.log(likesCoding);

/*
What is a variable?
A variable is a container that stores data so it can be used later.

What is the difference between let and const?
let can be changed later, while const stays the same.

What does console.log() do?
It prints output to the console so we can see results.
*/


// =======================
// Part 2: Conditionals
// =======================


let temperature = 55;

if (temperature < 60) {
  console.log("It is cold.");
} else {
  console.log("It is warm.");
}


let password = "javascript123";

if (password === "javascript123") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}


let hour = 14;

if (hour < 12) {
  console.log("Good morning");
} else if (hour <= 17) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

/*
What is the purpose of an if statement?
It allows the program to make decisions.

When would you use else if?
When you have multiple conditions to check.

What does === check for?
It checks if two values are exactly equal.
*/


// =======================
// Part 3: Functions
// =======================


function sayHello() {
  console.log("Hello!");
}
sayHello();


function favoriteFood(food) {
  console.log("My favorite food is " + food + ".");
}
favoriteFood("pizza");


function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(4, 5));


function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(6));

/*
Why are functions useful?
They help reuse code instead of repeating it.

What is a parameter?
It is a value passed into a function.

What is the difference between console.log() and return?
console.log() prints something, return sends a value back.
*/


// =======================
// Part 4: Loops
// =======================


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

/*
What is a loop used for?
To repeat code multiple times.

When might you use a for loop?
When you know how many times to repeat something.

What could happen if a loop condition never becomes false?
It could create an infinite loop.
*/


// =======================
// Part 5: Mini Challenges
// =======================

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
checkNumber(-3);

// Mini Challenge 2
function countdown(num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}
countdown(5);

// Mini Challenge 3
let studentName = "Amani";
let score = 88;

function checkProgress(score) {
  if (score >= 90) {
    console.log("Excellent work");
  } else if (score >= 75) {
    console.log("Good job");
  } else {
    console.log("Keep practicing");
  }
}
checkProgress(score);

// Mini Challenge 4 
let students = ["Amani", "Chris", "Taylor", "Jordan", "Alex"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}


// =======================
// Stretch Challenges
// =======================


function gradeCalculator(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
console.log(gradeCalculator(85));


for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


function repeatName(name, times) {
  for (let i = 0; i < times; i++) {
    console.log(name);
  }
}
repeatName("Amani", 3);


function oddOrEven(num) {
  let result = num % 2 === 0 ? "Even" : "Odd";
  for (let i = 0; i < 10; i++) {
    console.log(result);
  }
}
oddOrEven(7);


// =======================
// Reflection
// =======================

/*
Which topic felt easiest for you?
Variables and conditionals felt the easiest because they are straightforward.

Which topic felt most challenging?
Loops were a little harder at first because of the logic.

How do variables, conditionals, functions, and loops work together?
Variables store data, conditionals make decisions, functions organize code, and loops repeat actions.

What is one question you still have about JavaScript?
How do these basics connect to building full websites or apps?
*/