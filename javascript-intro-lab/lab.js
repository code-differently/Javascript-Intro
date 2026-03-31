// Practice 1: Create Variables
// Create variables
let name = "Lan Nguyen";
let age = 33; 
let favoriteColor = "orange";
let likesCoding = true;

// Print them
console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite Color:", favoriteColor);
console.log("Likes Coding:", likesCoding);

//## Check for Understanding

//Answer these questions in comments in your code:

//1. What is a variable? It's a named container that stores information.
//2. What is the difference between `let` and `const`?
//`let` is used when a variable value can change
//`const` is used when a variable value should not change
//3. What does `console.log()` do? print information to the console for debuging or display purpose
//------
//# Part 2: Conditionals

//## What is a Conditional? A conditional allows your program to make decisions.

//## Practice 2: Write Conditionals

//### Task A

//Create a variable called `temperature`.
//Write a conditional that prints:
//* `"It is cold."` if the temperature is below 60
//* `"It is warm."` if the temperature is 60 or higher

let temperature = 55; 

if (temperature < 60) {
    console.log("It is cold.");
} else {
    console.log("It is warm.");
}

//### Task B
//Create a variable called `password`.
//Write a conditional that prints:
//* `"Access granted"` if the password is `"javascript123"`
//* `"Access denied"` otherwise

let password = "javascript123";
if(password === "javascript123"){
    console.log("Access granted");
}else{
    console.log("Access denied");
}

//### Task C

//Create a variable called `hour`.
//Write a conditional that prints:

//* `"Good morning"` if the hour is less than 12
//* `"Good afternoon"` if the hour is between 12 and 17
//* `"Good evening"` otherwise

let hour=10;
if(hour <12){
    console.log("Good morning");
} else if( hour >= 12 && hour <=17){
    console.log("Good evening");
}

//---

//## Check for Understanding

//Answer these questions in comments:

//1. What is the purpose of an `if` statement? check if a condition is true and execute code accordingly.
//2. When would you use `else if`? when I want to check multiple conditions in a sequence, and execute different code for each condition.
//3. What does `===` check for? it checks if two values are equal in both value and type.

//--

//## Practice 3: Build Functions
//### Task A
//Create a function called `sayHello` that prints a greeting.
//### Task B

//Create a function called `favoriteFood` that accepts one parameter and prints:

//'''javascript
//"My favorite food is ____."

function sayHello(name) {
  console.log("Hello, " + name);
 
}sayHello("Joseph");
function favoriteFood(food){
    console.log("My favorite food is " + food);

}favoriteFood("fruit");

// ### Task C

//Create a function called `multiply` that accepts two numbers and returns the product.

//### Task D

//Create a function called `isEven` that accepts one number and returns whether the number is even.

//---

function multiply(num1, num2){
return num1*num2;
}
let product = multiply(5,3);
console.log("Product :" + product);

function isEvent(num){
    return num %2 === 0;
}
let number = 4;
console.log("is" + number + "even?" + isEvent(number));

//----
//## Check for Understanding

//Answer these questions in comments:

//1. Why are functions useful? functions are reuable blocks of code that 
// perform a specific task, they help to organize code and make it more midular, 
// and they allow us to avoid repetition by encapsulating logic that can be called multiple times with different inputs.
//2. What is a parameter? A parameter is a value the function receives.
3//. What is the difference between `console.log()` and `return`? Prints output to the console
// return gives back a value from a function to the caller, allowing the function to produce a result that can be used elsewhere in the code.
//---------

//## Practice 4: Use Loops
//### Task A
//Write a `for` loop that prints numbers 1 through 10.
for(let i=1; i<=10; i++){
    console.log(i);
}

//### Task B
//Write a `for` loop that prints only even numbers from 2 to 20.
for(let i=2; i<=20; i++){
    if(i%2== 0){
        console.log(i);
    }
}
//### Task C
//Write a `while` loop that prints numbers 5 down to 1.
let j=5;
while(j>=1){
    console.log(j);
    j--;
}
//### Task D
//Write a loop that prints:
//```javascript
//"Practice makes progress"
//five times.
//---

for(let k=0; k<5; k++){console.log("Practice makes progress");}

////## Check for Understanding
//Answer these questions in comments:

//1. What is a loop used for? A loop repeats code multiple times.
//2. When might you use a `for` loop? /It is useful when you know how many times you want to repeat something.
//3. What could happen if a loop condition never becomes false?infinite loop, it will continue to run indefinitely, which can cause the program to crask or become unresponsive and consume system resources.

//---

//# Part 5: Combine Everything
//## Mini Challenge 1: Number Checker
//Create a function that:
//* accepts one number
//* uses a conditional to check whether it is positive, negative, or zero
//* prints the result

function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Test examples
checkNumber(5);
checkNumber(-3);
checkNumber(0);

//---

//## Mini Challenge 2: Countdown Function
//Create a function that:
//* accepts one number
//* uses a loop to count down from that number to 1
//* prints each number
function countdown(num) {
    for (let i = num; i >= 1; i--) {
        console.log(i);
    }
}

// Test example
countdown(5);

//---

//## Mini Challenge 3: Student Progress Checker
//Create:
//* a variable called `studentName`
//* a variable called `score`

//Then create a function that checks the score and prints:

//* `"Excellent work"` for 90 and above
//* `"Good job"` for 75 to 89
//* `"Keep practicing"` below 75

let studentName = "Lan Nguyen";
let score = 85;

// Function to check score
function checkScore(name, score) {
    console.log("Student:", name);

    if (score >= 90) {
        console.log("Excellent work");
    } else if (score >= 75) {
        console.log("Good job");
    } else {
        console.log("Keep practicing");
    }
}

// Call function
checkScore(studentName, score);
//---

//## Mini Challenge 4: Class Roster
//Create an array of 5 names if you already know arrays.
//If you do **not** know arrays yet, just create 5 separate variables.
//Then:

//* write a loop
//* print each student name one at a time

//> Bonus: If you have not learned arrays yet, skip this one or ask your instructor for support.
// Class roster (array of 5 names)
let students = ["Lan", "John", "Maria", "David", "Sophia"];

// Loop through and print each name
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
//---

//# Stretch Challenges
//Complete these if you finish early.
//### Stretch 1
//Write a function called `gradeCalculator` that returns:

//* `"A"` for 90–100
//* `"B"` for 80–89
//* `"C"` for 70–79
//* `"D"` for 60–69
//* `"F"` below 60

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

// Example tests
console.log(gradeCalculator(95)); // A
console.log(gradeCalculator(82)); // B
console.log(gradeCalculator(74)); // C
console.log(gradeCalculator(65)); // D
console.log(gradeCalculator(50)); // F
//---------

//### Stretch 2
//Write a loop that prints all numbers from 1 to 30 that are divisible by 3.

for(let i=1; i<30; i++){
    if(i%3===0){
        console.log(i);
    }
}

//### Stretch 3
//Write a function that accepts a name and a number, then prints that name the number of times given.
//### Stretch 4
//Write a program that checks if a number is odd or even and then prints the result 10 times using a loop.
function printName(name, times) {
    for (let i = 0; i < times; i++) {
        console.log(name);
    }
}

// Example
printName("Lan Nguyen", 3);

//---

function checkOddEven(num) {
    let result;

    if (num % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    for (let i = 0; i < 10; i++) {
        console.log(result);
    }
}

// Example
checkOddEven(8);

//-----------

//# Reflection Questions

//Answer these in comments at the bottom of your file:

//1. Which topic felt easiest for you? yes
//2. Which topic felt most challenging? none
//3. How do variables, conditionals, functions, and loops work together in a program?Variable → studentScores stores data
//Function → analyzeScores() organizes logic, Loop → goes through each score, Conditionals → decide the grade
//Together, they turn raw data into meaningful results.
//4. What is one question you still have about JavaScript? When should I use a function instead of writing code directly in a loop or conditional?
