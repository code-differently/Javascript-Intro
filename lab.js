let name = "Alex";
let age = 23;
let favoriteColor = "blue";
let likesCoding = true;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Favorite Color: " + favoriteColor);
console.log("Likes Coding: " + likesCoding);

//1. What is a variable?
// A variable is a container for storing data values.

//2. What is the difference between `let` and `const`?
// `let` allows you to reassign the value of a variable, while `const` does not.

//3. What does `console.log()` do?
// `console.log()` outputs a message to the console.


let temperature;

if(temperature >= 60) {
    console.log("It is warm.");
} else {
    console.log("It is cold.");
}



let password;

if(password == "javascript123"){
    console.log("Access granted.");
}else{
    console.log("Access denied.");
}



let hour;

if(hour < 12) {
    console.log("Good morning");
} else if(hour >= 12 && hour < 17) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}


//1. What is the purpose of an `if` statement?
//1. An `if` statement is used to execute a block of code if a specified condition is true.

//2. When would you use `else if`?
//2. You would use `else if` when you have multiple conditions to check after the initial `if` statement.

//3. What does `===` check for?
//3. `===` checks for both value and type equality, meaning it returns true only if both the value and type are the same.






function sayHello() {
    console.log("Hello, world!");
}


function favoriteFood(food) {
    console.log("My favorite food is " + food + ".");
}

function multiply(num1, num2) {
    return num1 * num2;
}


function isEven(number) {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


//1. Why are functions useful?
//1. Functions are useful because they allow you to reuse code, break down complex problems into smaller, more manageable pieces, and improve the readability and organization of your code.
//2. What is a parameter?
//2. A parameter is a variable that is used to pass information into a function. It acts as a placeholder for the value that will be provided when the function is called.
//3. What is the difference between `console.log()` and `return`?
//3. `console.log()` is used to output a message to the console, while `return` is used to specify the value that a function should output when it is called. `return` also ends the execution of the function, while `console.log()` does not affect the flow of the function.




for(let i = 1; i <= 10; i++) {
    console.log(i);
}



for(let i = 2; i <= 20; i += 2) {
    console.log(i);
}


let j = 5;
while(j >= 1) {
    console.log(j);
    j--;
}


for(let k = 0; k < 5; k++) {
    console.log("Practice makes progress");
}


//1. What is a loop used for?
//1. A loop is used to repeat a block of code multiple times until a specified condition is met.
//2. When might you use a `for` loop?
//2. You might use a `for` loop when you know in advance how many times you want to execute a block of code, such as iterating through an array or counting a specific number of iterations.
//3. What could happen if a loop condition never becomes false?
//3. If a loop condition never becomes false, it could result in an infinite loop, which can cause the program to crash or become unresponsive.






function numberChecker(num) {
    if(num > 0) {
        console.log("The number is positive.");
    } else if(num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}



function countdown(num){
    for(let i = num; i >= 1; i--){
        console.log(i);
    }
}

let studentName;
let score;

function checkStudentProgress(studentName, score){
    if(score>=90){
        console.log("Excellent work, " + studentName + "!");
    } else if(score>=75 && score < 90){
        console.log("Good job, " + studentName + "!");
    } else {
        console.log("Keep practicing, " + studentName + "!");

    }
}



let students = ["Alex", "Bob", "Charlie", "David", "Eve"];

for (let i = 0; i <students.length; i++){
    console.log(students[i]);
}