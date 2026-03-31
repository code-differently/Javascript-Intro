let name = "Glenn Tyson";
let age = 31; 
let favoriteColor = "Blue";
let likesCoding = true;
// What is a variable?
// A variable is a container used to store data that can be used later in a program.

// What is the difference between let and const?
// let allows you to change (reassign) the value later.
// const does not allow reassignment; the value stays constant.

// What does console.log() do?
// console.log() prints output to the console so you can see values or debug your code.

console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite Color:", favoriteColor);
console.log("Likes Coding:", likesCoding);

let temperature= 85;

if (temperature >= 60) {
  console.log("It is warm.");
} else {
  console.log("It is cold.");
}
let password="javascript123";


if (password==="javascript123") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

let hour = 2;

if (hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}
// What is the purpose of an if statement?
// An if statement is used to run code only when a certain condition is true.

// When would you use else if?
// You use else if when you have multiple conditions to check after the first if.

// What does === check for?
// === checks for strict equality, meaning both value AND data type must be the same.

function sayHello() {
  console.log("Hello!");
}
let food ="Pizza";
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
console.log(multiply(2, 3));
console.log(isEven(6));

// Why are functions useful?
// Functions are useful because they allow you to reuse code, keep your program organized, 
// and make it easier to manage and update.

// What is a parameter?
// A parameter is a variable inside a function that receives a value when the function is called.

// What is the difference between console.log() and return?
// console.log() prints a value to the console.
// return sends a value back from a function so it can be stored or used later.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
let i = 5;

while (i >= 1) {
  console.log(i);
  i--;
}
for (let i = 1; i <= 5; i++) {
  console.log("Practice makes progress");
}
// What is a loop used for?
// A loop is used to repeat a block of code multiple times until a condition is met.

// When might you use a for loop?
// You would use a for loop when you know how many times you want the code to run.

// What could happen if a loop condition never becomes false?
// It would create an infinite loop, causing the program to run forever and possibly crash or freeze.

//Mini 1
function checkNumber(num) {
  if (num > 0) {
    console.log("The number is positive");
  } else if (num < 0) {
    console.log("The number is negative");
  } else {
    console.log("The number is zero");
  }
}


checkNumber(5);
checkNumber(-3);
checkNumber(0);
//Mini 2
function countdown(num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}


countdown(5);



let studentName = "Glenn";
let score = 85;
//Mini 3
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

//Mini 4
let students = ["Glenn", "Mason", "Cory", "Mesheik", "Amani"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}


//Strech 1
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


console.log(gradeCalculator(85));

//Stretch 2

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//Stretch 3
function printName(name, times) {
  for (let i = 0; i < times; i++) {
    console.log(name);
  }
}


printName("Glenn", 5);

//Stretch 
function oddOrEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

for (let i = 0; i < 10; i++) {
  console.log(oddOrEven(7)); 
}

// Reflection Questions

// Which topic felt easiest for you?
// Variables were the easiest because they just store values.

// Which topic felt most challenging?
// Loops were the hardest because it can be confusing when they stop.

// How do variables, conditionals, functions, and loops work together in a program?
// Variables store data, conditionals make choices, functions run code, and loops repeat things.

// What is one question you still have about JavaScript?
// How do all of these work together in bigger programs?