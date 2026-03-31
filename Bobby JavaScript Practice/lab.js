/*
1.  A variable is a named container that stores a value
2. let can be reassigned, const cannot be reassigned
3. console.log() prints a value to the terminal so we can see it like "sout" in Java
*/
let name = "Bobby";
let age = 25;
let favoriteColor = "red";
let likesCoding = true;

console.log(name);
console.log(age);
console.log(favoriteColor);
console.log(likesCoding);

/*
1. The purpose of an if statement is to make decisions based on a condition
2. you use else if when you have more than two possible outcomes to check
3. === checks for equal value and equal type  ex. -> "5" === 5 = false
*/

let temperature = 55;

if (temperature < 60) {
console.log("It's cold.");
} else{
console.log("It's warm.");
}

let password = "javascript123";

if (password === "javascript123") {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}


let hour = 9;

if (hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

/*
1. Fuctions are reusable blocks of code that perform a specific task like methods in Java.
2. Paramerters, just like in Java, are placeholders for calues to pass into the function.
3. console.log is the same as a sout in Java and return is used to give back a value just like in Java.
*/
function sayHello() {
    console.log("Hello, welcome to JavaScript.");
}
sayHello();
function favoriteFood(food) {
    console.log("My favorite food is " + food + ".");
}
favoriteFood("wings");

function multiply(a, b){
    return (a * b);
}
console.log(multiply(4, 8));

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(10)); 
console.log(isEven(7)); 


/*
1. A loop, just like in Java, is used to repeat a block of code multiple times.
2. A for loop is typically used when the number of iterations is known.
3. The loop will continue to execute forever.
*/
let count = 1;
for (let i= 1; i<=10; i++){
    console.log(count);
    count++;
}

let evenCount= 2;
for (let i= 2; i<=20; i++){
 if (evenCount % 2 === 0) {   
    console.log(evenCount);
}
    evenCount++;
}

let printNumbers = 5;
while (printNumbers > 0) {
    console.log(printNumbers);
    printNumbers--;
}

for (let i = 1; i <= 5; i++) {
    console.log("Practice makes progress");
}

/*
 
1. variables store data, conditionals make decisions with that data, 
functions organize reusable logic, and loops repeat actions efficiently.
2. Easiest - conditionals, they are similar to Java
3. Hardest - Functions since I am not used to them being easy to understand and use compared to Java methods, but I am getting the hang of them.
4. One question: How do JavaScript functions differ from Java methods in complex cases?

*/
function numberChecker(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
numberChecker(5);
numberChecker(-3);
numberChecker(0);


function countdown(num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}
countdown(5);


let studentName = "Bobby";
let score = 92;

function progressChecker(score) {
  if (score >= 90) {
    console.log(studentName + ": Excellent work");
  } else if (score >= 75) {
    console.log(studentName + ": Good job");
  } else {
    console.log(studentName + ": Keep practicing");
  }
}
progressChecker(score);


let student1 = "Bobby";
let student2 = "Marcus";
let student3 = "Tia";
let student4 = "Jordan";
let student5 = "Aaliyah";

let roster = [student1, student2, student3, student4, student5];

for (let i = 0; i < roster.length; i++) {
  console.log(roster[i]);
}

