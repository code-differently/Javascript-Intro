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
for (let i= 0; i<=20; i++){
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

