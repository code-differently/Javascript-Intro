// Practice 1
let name = "Jayden";
let age = 24;
let favoriteColor = "red";
let likesCoding = true;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Favorite Color: " + favoriteColor);
console.log("Likes Coding: " + likesCoding);

/*
Check for Understaning

1. What is a variable?

A variable is a named container that stores information.

2. What is the difference between let and const?

Let is used when a variables value can change, while const is used when a variable's value should not change.

3. What does console.log() do?

console.log() is a function that outputs information to the console.
*/

// Practice 2

// Task A
let temperature = 30;

if (temperature < 60) {
    console.log("It is cold.");
} else {
    console.log("It is warm.");
}

// Task B
let password = "javascript123"

if (password == "javascript123") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// Task C
let hour = 15;

if (hour < 12) {
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

/* 
Check for Understanding

1. What is the purpose of an if statement?

An if statement is used when we want to execute a block of code only if a certain condition is true.

2. When would you use else if?
We would use an else if when we have multiple conditions to check, and we want to execute different blocks of code based on which condition is true.

3. What does === check for?
The === operator checks for strict equality, meaning it checks if two values are equal and of the same data type.
*/

// Practice 3

// Task A
function sayHello() {
    console.log("Hello!");
}
sayHello();

// Task B
function favoriteFood(food) {
    console.log("My favorite food is " + food + ".");
}
favoriteFood("pizza");

// Task C
function multiply(a, b) {
    return a * b;
}
let result = multiply(5, 3);
console.log("The result is: " + result);

// Task D
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

/* 
Check for Understanding
1. Why are functions useful?
Functions are useful because they allow us to reuse code and organize it into logical blocks.

2. What is a parameter?
A parameter is a value that a function receives. It is used to pass information into a function.

3. What is the difference between console.log() and return?
console.log() outputs a value to the console, while return sends a value back from the function to where it was called.
*/

// Practice 4

// Task A
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task B
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Task C
let j = 5;
while (j >= 1) {
    console.log(j);
    j--;
}

// Task D
for (let k = 0; k < 5; k++) {
    console.log("Practice makes progress");
}

/*
Check for Understanding
1. What is a loop used for?
A loop is used to repeat a block of code multiple times until a certain condition is met.

2. When might you use a for loop?
You might use a for loop when you know how many times you want to repeat a block of code.

3. What could happen if a loop condition never becomes false?
If a loop condition never becomes false, the loop could run indefinitely.
*/

// Practice 5

// Mini Challenge 1: Number Checker

function checkNumber(num) {
    if (num > 0) {
        console.log(num + " is positive.");
    } else if (num < 0) {
        console.log(num + " is negative.");
    } else {
        console.log(num + " is zero.");
    }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);

// Mini Challenge 2: Countdown Function

function countdown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

countdown(5);

// Mini Challenge 3: Student Progress Checker
let studentName = "Jayden";
let score = 91;

function checkProgress(name, score) {
    if (score >= 90) {
        console.log("Excellent work, " + name + "!");
    } else if (score >= 75) {
        console.log("Good job, " + name + "!");
    } else {
        console.log("Keep practicing, " + name + "!");
    }
}
checkProgress(studentName, score);

// Mini Challenge 4: Class Roster 
let classRoster = ["Bryant", "Mesheik", "Henrrietta", "Derwin", "Corey"];

function printRoster(roster) {
    for (let i = 0; i < roster.length; i++) {
        console.log(roster[i]);
    }
}
printRoster(classRoster);

// Stretch Goals

// Stretch 1
function gradeCalculator(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(gradeCalculator(95)); // A
console.log(gradeCalculator(85)); // B
console.log(gradeCalculator(75)); // C
console.log(gradeCalculator(65)); // D
console.log(gradeCalculator(55)); // F

// Stretch 2
function divisibleByThree() {
    for (let i = 1; i < 31; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
divisibleByThree();

// Stretch 3
function printNTimes(name, n) {
    for (let i = 0; i < n; i++) {
        console.log(name);
    }
}
printNTimes("Jayden", 5);

// Stretch 4
function evenOrOddTenTimes(num) {
    for (let i = 0; i < 10; i++) {
        if (num % 2 === 0) {
            console.log(num + " is even.");
        } else {
            console.log(num + " is odd.");
        }
    }
}
evenOrOddTenTimes(4);
evenOrOddTenTimes(7);

// Reflection Questions

/*
1. Which topic felt easiest for you?
The easiest topic for me were variables, as I feel like they are easy to work with.

2. Which topic felt most challenging?
The most challenging topic for me was remembering the syntax of function declarations.

3. How do variables, conditionals, functions, and loops work together in a program?
Variables are used to store information, conditionals allow us to make decisions based on that information, 
functions allow us to organize our code into reusable blocks, and loops allow us to repeat code multiple times. 
Together, they help us create programs to complete complex tasks.

4. What is one question you still have about JavaScript?
Is there ever a reason to code in it other than for web development?
*/
