
//Practice 1: Create Variables 
let name = "Henrrietta Riverson";
let age = 23;
let favoriteColor = "red";
let likesCoding = true;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Favorite Color: " + favoriteColor);
console.log("Likes Coding: " + likesCoding);

/*
1. What is a variable?
    -A variable is a container for storing data values. It allows you to store and manipulate information in your code.
2. What is the difference between let and const?
    -The main difference between let and const is that let allows you to change the value of the variable, while const does not allow changing. Once a value is assigned to a const variable, it cannot be changed.
3. What does console.log() do?
    -console.log() is a function that prints out the information that is passed into the console.
*/

//Practice 2: Write Condtionals 

//Task A
let temperature = 70;

if (temperature > 60) {
    console.log("It is cold");
} else {
    console.log("It is warm");
}

//Task B
let passoword = "javascript123";

if (password == "javascript123") {
    console.log("Access granted");
    }
    else {
    console.log("Access denied");
    }

//Task C
let hour = 3;

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
    -An if statement is used to execute a block of code only if a specified condition is true. It allows you to make decisions in your code based on certain conditions.
2. When would you use else if?
    -You would use else if when you have multiple conditions to check. It allows you to specify additional conditions to be evaluated if the previous conditions are false.
3. What does === check for?
    -The === operator checks for strict eqaulity, meaning it checks if two values are equal and of the same data type.
*/

//Practice 3: Build Functions

//Task A
function sayHello(){
    console.log("Hello");
}
sayHello();

//Task B
function favoriteFood(food){
    console.log("My favorite food is " + food);
}
favoriteFood("wings");

//Task C
function multiply(a,b){
    return a * b;
}

let result = multiply(5, 10);
console.log("The result is: " + result);

//Task D
function isEven(number){
    if (number % 2 === 0);
}

console.log(isEven(2)); // true
console.log(isEven(3)); // false

/*
Check for Understanding
1. Whay are functions useful?
    - Functions are useful because they allow us to reuse code and organize it into logical blocks.
2. What is a parameter?
    - A parameter is a value that a function recevies. It is used to pass information into a function. 
3. What is the difference between console.log() and return?
    - console.log() prints a value to the console. Return prints a value from the function that was called.
*/

// Practice 4: Use Loops

//Task A
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//Task B
for(let i = 2; i <= 20; i += 2){
    console.log(i);
}

//Task C
let h = 5;

while(h >= 1){
    console.log(h);
    h --;
}

//Task D
for(let r = 0; r < 5; r++){
    console.log("Practice makes progress")
}

/*
Check for Understanding
1. What is a loop?
    - A loop is used to repeat a block of code multiple times until a certain condition is met.
2. When might you use a for loop
    - A for loop is useful when you know how many time you want to repeat a block of code.
3. What could happen if a loop condition never becomes false?
    - If a loop condition never becomes false, then the loop is a inifinte loop and runs forever.
*/

//Practice 5: Combine Everything 

//Mini Challenege 1: Number Checker

function checkNumber(num){
    if (num > 0){
        console.log(num + " is a positive number");
    }
    else if(num < 0){
        console.log(num + "is a negative number");
    }
    else{
        console.log(num + " is zero");
    }
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);

//Mini Challenge 2: Countdown Function

function countdown(n){
    for(let i = n; i > 0; i--){
        console.log(i);
    }
}

countdown(6);

//Mini Challenge 3: Student Progress Checker

let studentName = "Henrrietta";
let score = 95;

function checkProgress(name, score){
    if(score >= 90){
        console.log("Excellent work," + name + "!");
    }
    else if(score >= 75){
        console.log("Good job," + name + "!");
    }
    else{
        console.log("Keep practicing," + name + "!");
    }

}

checkProgress(studentName, score);

//Mini Challenge 4: Class Roster

let students = ["Jasmine", "John", "Emily", "Michael", "Sarah"];

function printRoster(roster){
    for(let i = 0; i < roster.length; i++){
        console.log(roster[i]);
    }
}

printRoster(students[i]);

//Reflection Questions

/*
1. Which topic felt easiest for you?
    - The easiest topic for me was variables, it was easy for me to declare variables since it is so close to working with Java. 
2. Which topic felt the most challenging?
    - The most challenging topic was remembering the syntax and structure differences from Java.
3. How do variables, conditionals, functions, and loops work together in a program?
    - Variables store information, conditionals allow us to make decisions based on a statement that uses a variable,
    functions allow us to organize code into resuable blocks, and loops allow us to repeat a code multiple times. 
4. What is one question you still have about JavaScript?
    - What is the major difference between using JavaScript and Java?
*/
