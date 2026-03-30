let name = "Mason Brown";
let age = 37;
let favoritecolor = "blue";
let doeslikecoding = true;
//what is a variable? A variable is a container for storing data values. It can hold different types of data, such as numbers, strings, or booleans. Variables are used to store and manipulate information in a program.
//What is the difference between let and const? The main difference between let and const is that let allows you to reassign a value to the variable, while const does not allow reassignment. Once a value is assigned to a const variable, it cannot be changed. On the other hand, let variables can be reassigned new values throughout the program. Additionally, const variables must be initialized at the time of declaration, while let variables can be declared without an initial value.
//What does console.log() do? console.log() is a function in JavaScript that is used to print or display output to the console. It allows developers to log messages, variables, or any other information for debugging purposes. When you call console.log() with an argument, it will output that argument to the console, making it easier to track the flow of the program and identify any issues.
let temp = 85;

if (temp > 60) {
  console.log("It is warm");
} else if (temp < 60) {
  console.log("It is cold");
} else {
    console.log("It is exactly 60 degrees");
}
let password = "javascript123";

if (password === "javascript123") {
  console.log("Access granted");
} else if (password !== "javascript123") {
  console.log("Invalid password");
} else {
  console.log("Keep practicing.");
}

let hour = 3;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

//What is the purpose of an if statement? An if statement is used to make decisions in a program. It allows you to execute a block of code only if a specified condition is true. If the condition is false, the code block will be skipped. This helps in controlling the flow of the program and allows for different outcomes based on different conditions.
//When would you use else if? You would use else if when you have multiple conditions to check after the initial if statement. It allows you to specify additional conditions that will be evaluated if the previous conditions are false. This way, you can handle multiple scenarios and provide different outcomes based on different conditions without having to nest multiple if statements.
//What does === check for? The === operator checks for strict equality in JavaScript. It compares both the value and the type of the operands. If both the value and the type are the same, it returns true; otherwise, it returns false. For example, 5 === 5 would return true, but 5 === "5" would return false because they are of different types (number vs string).
 
//print a greeting to the console using a function
function SayHello() {
  console.log("Hello!");
}

SayHello();

//print favorite food to the console using a function that takes a parameter
function FavoriteFood(food) {
  console.log("My favorite food is " + food);
}

FavoriteFood("pizza");

//Create a function called multiply that accepts two numbers and returns the product.
function multiply(num1, num2) {
  return num1 * num2;
}

let result = multiply(5, 10);
console.log(result); // Output: 50

//Create a function called isEven that accepts one number and returns whether the number is even.
function isEven(num) {
  return num % 2 === 0;
}   
let evenResult = isEven(4);
console.log(evenResult); 

//Why are functions useful? Functions are useful because they allow us to break down complex problems into smaller, more manageable pieces. They help in organizing code, improving readability, and promoting code reusability. By defining a function, we can encapsulate a specific task or behavior, making it easier to understand and maintain. Functions also allow us to avoid repetition by enabling us to call the same block of code multiple times with different inputs, which can save time and reduce errors in our programs.
//What is a parameter?A parameter is a variable that is used in a function definition to represent a value that will be passed into the function when it is called. Parameters act as placeholders for the values that the function will operate on. When you call a function, you can provide arguments that correspond to the parameters defined in the function, allowing the function to perform its task using those values. For example, in the function definition `function add(a, b)`, `a` and `b` are parameters that will receive the values passed when the function is called, such as `add(5, 10)`, where `5` and `10` are the arguments.
//What is the difference between console.log() and return? The main difference between console.log() and return is that console.log() is used to output information to the console for debugging purposes, while return is used to specify the value that a function should output when it is called. When you use console.log(), it will display the message or value in the console, but it does not affect the flow of the program or the value that the function returns. On the other hand, when you use return, it will exit the function and provide a value back to the caller, which can be used in further calculations or operations. In summary, console.log() is for displaying information, while return is for providing a value from a function.

//Write a for loop that prints numbers 1 through 10.   
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Write a for loop that prints the even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Write a for loop that prints only even numbers from 2 to 20.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}   
//Write a while loop that prints numbers 5 down to 1.
let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}
//Write a loop that prints: "Practice makes progress!" 5 times.
for (let k = 0; k < 5; k++) {
  console.log("Practice makes progress!");
}

//What is a loop used for? A loop is used for repeating a block of code multiple times. It allows you to execute a set of instructions until a certain condition is met. Loops are useful for tasks that require repetition, such as iterating through arrays, performing calculations, or generating output. They help in reducing code redundancy and improving efficiency by automating repetitive tasks. There are different types of loops in JavaScript, including for loops, while loops, and do-while loops, each with its own syntax and use cases.
//When might you use a for loop? You might use a for loop when you know in advance how many times you want to execute a block of code. For example, if you want to iterate through an array of items, you can use a for loop to access each element by its index. For loops are also useful when you need to perform a specific action a certain number of times, such as printing numbers from 1 to 10 or generating a sequence of values. They provide a concise and structured way to handle repetitive tasks when the number of iterations is known beforehand.
//What could happen if a loop condition never becomes false? If a loop condition never becomes false, it can lead to an infinite loop. An infinite loop is a loop that continues to execute indefinitely because the terminating condition is never met. This can cause the program to become unresponsive or crash, as it will consume system resources without ever stopping. It is important to ensure that loop conditions are properly defined and that there is a way for the loop to exit to avoid such issues.
//Create a function that: accepts one number, uses a conditional to check whether it is positive, negative, or zero & prints the result

function checkNumber(num) {
  if (num > 0) {
    console.log("The number is positive.");
  } else if (num < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}

//Create a function that: accepts one number, uses a loop to count down from that number to 1 and prints each number
function countdown(num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}

//Create: a variable called studentName, a variable called score Then create a function that checks the score and prints: "Excellent work" for 90 and above "Good job" for 75 to 89 & "Keep practicing" below 75
let studentName = "John Doe";
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

//Create an array of 5 names if you already know arrays. If you do not know arrays yet, just create 5 separate variables, write a loop, print each student name one at a time.
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}