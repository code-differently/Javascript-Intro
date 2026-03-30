//Part 1 Variables
const name = "Mesheik Brown";
console.log(name);

let age = 25;
console.log(age);

let favoriteColor = "black";
console.log(favoriteColor);

let likesCoding = true;
console.log(likesCoding);

//1.What is a variable?
//AW: A variable is a container for storing data values. It allows you to store and manipulate information in your code.

//2.What are the differences between const and let?
//AW: let allows you to chage  the variable's value and const does not allow values to be changed when they are declared.

//3.What does console.log() do?
//AW: console.log() is a function that outputs a message to the web console. 


//Part 2: Conditionals

//Task A 
let temperature = 60;

if (temperature <60) {
    console.log("It's cold outside!");
}else {
    console.log("It's warm outside!");
}

//Task B
let password = "javascript123"; 

if (password === "javascript123") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

//Task C
let hour = 10;

if (hour <12) {
    console.log("Good morning!");
} else if (hour >=12 && hour <=17) {
    console.log("Good afternoon!");
}else {
    console.log("Good evening!");
}

//1.What is the purpose of an if statement?
//AW: An if statement is used to perform a block of code only if a specified condition is true. 

//2.When would you use else if ?
//AW: You would use else if when you have multiple conditions to check. 

//3. What does == check for?
//AW: The == operator checks for equality between two values, converting types if necessary.


//Part 3: Functions


//Task A
//Create a function called sayHello that prints a greeting.

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Mesheik");

//Task B
//Create a function called favoriteFood that accepts one parameter and prints: "My favorite food is [parameter]."

function favoriteFood(food) {
    console.log("My favorite food is " + food + ".");
}

favoriteFood("pizza");

//Task C
//Create a function called multiply that accepts two numbers and returns the product.

function multiply(num1, num2) {
    return num1 * num2;
}

let result = multiply(5, 3);
console.log(result); // Output: 15

//Task D
//Create a function called isEven that accepts one number and returns whether the number is even.

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false


//Why are functions useful?
//AW: Functions are useful because they allow you to reuse code break down complex problems into smaller, more manageable pieces, and improve the readability and maintainability of your code.

//What is a parameter?
//AW: A parameter is a variable that is used to pass information.

//What is the difference between console.log() and return?
//AW: console.log() outputs a value to the console for debugging purposes, while return statements send a value back to the caller of the function.


//Part 4: Loops

//Task A
//Write a for loop that prints numbers 1 through 10.

for (let i =1; i <=10; i++) {
    console.log(i);
}

//Task B
//Write a for loop that prints only even numbers from 2 to 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//Task C
//Write a while loop that prints numbers 5 down to 1.

let j = 5;
while (j >= 1) {
    console.log(j);
    j--;
}

//Task D
//Write a loop that prints:
//"Practice makes progress"
//five times.

for (let k = 0; k < 5; k++) {
    console.log("Practice makes progress");
}

//1.What is a loop used for?
//AW: A loop is used to repeat a block of code multiple times until a specified condition is met.

//2.When might you use a for loop?
//AW: You might use a for loop when you know in advance how many times you want to execute a block of code, such as iterating over an array or counting a specific number of iterations.

//3.What could happen if a loop condition never becomes false?
//AW: If a loop condition never becomes false, the loop will run indefinitely, causing the program to hang or crash.


//Part 5: Combine Everything

//Mini Challenge 1. Number Checker 

function numberChecker(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

//Mini Challenge 2. Countdown Fuction

function countdown(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

//Mini Challenge 3. Student Progress Checker

function studentProgressChecker(score) {
    if (score >= 90) {
        console.log("Excellent Work!");
    } else if (score >= 75 && score <= 89) {
        console.log("Good Job!");
    } else {
        console.log("Keep practicing.");
    } 
    
}


//1.Which topic felt easiest for you?
//AW:Loops 

//2.Which topic felt most challenging?
//AW: Functions

//3.How do variables, conditionals, functions, and loops work together in a program?
//AW: Variables are used to store data, conditionals allow the program to make decisions based on that data, functions allow us to organize and reuse code, and loops allow us to repeat actions. 

//4.What is one question you still have about JavaScript?
//AW: How would arrays and objects work in JavaScript?


