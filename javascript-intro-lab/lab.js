
function main() {

    console.log("running main!");

    //Part 1:

    //What is a variable?
    //A variable is a container used to store 
    // important data to be used later.
    let name = "Chris";
    let age = 23;

    let favoriteColor = "Yellow";
    let likesCoding = true;

    console.log(name + ", " + age + ", " + favoriteColor + ", " + likesCoding);



    //Part 2:

    //temperature check
    let temperature = 25;

    if (temperature < 60) {
        console.log("It is cold.");
    } else {
        console.log("It is warm.");
    }

    //password check
    const password = "jordaneldridge_likesrunning";

    if (password === "javascript123") {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }

    //hours check
    const hours = 11;

    if(hours < 12) {
        console.log("Good morning");
    }
    else if (hours >= 12 && hours <= 17) {
        console.log("Good afternoon");
    }
    else {
        console.log("Good evening");
    }


    //1. What is the purpose of an if statement?
    
    //It's used to check for conditional logic in the program
    //If the condition is true, the code inside the if statement
    //runs, and if its not then the code is skipped entirely.


    //2. When would you use else if?

    //You would use else if when you want to do a further
    //evaluation after the initial if statement is false.
    //You can also chain these together to keep the evaluations.
    //going if the else if before the chained one is also false.



    //3. === checks for absolute equality. (value and type)
    //unlike == which checks for an equivalent value then 
    // converts them to a common type during evaluation.


    //Part 3)

    sayHello("Coreye")

    sayHello("Mahee Mahee Fish");


    multiply(5,2);

    isEven(4);


    //1. Why are functions useful?

    //2. They're useful for organization and not reapeating the same lines of code over and over.
    //A parameter is the value that's passed into a function, they can be freely used within the scope of the function.

    //3. Differences between console.log() and return?
    //console.log just prints to the console, return has the function return a value back to the original scope of where it was called.



    //Part 4)

    console.log("Loop part 1:")
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
    console.log("Loop part 2:");

    for(let i = 2; i <= 20; i += 2) {
        console.log(i);
    }

    console.log("Loop part 3:");
    let count = 5;
    while(count > 0) {
        console.log(count);
        count--;
    }

    console.log("Loop part 4:")
    count = 5;
    while(count > 0) {
        console.log("Practice makes progress");
        count--;
    }

    // 1. What is loop used for?

    // The loop is used for repeat code multiple times until 
    // a terminating condition is met.

    //2. When might you use a for loop?

    // I'll use a for loop when I need a definite counter to 
    // iterate continously until a terminating condition is 
    // reached.

    //3. What could happen if a loop condition never becomes 
    //   false?

    // An error known as an infinite loop is occured, where 
    // the program does not end until the user prompts it to.


    // Part 5.
    numberChecker(9);
    countdownFunction(10);
    progressChecker("Bob", 90);
    classRoster();

}

function sayHello(name) {
    console.log("Hi my name is, " + name);
}

function favoriteFood(food) {
    console.log("My favorite food is " + food);
}

function multiply(num1, num2) {
    return num1 * num2;
}

function isEven(num) {
    return num % 2 == 0;
}


function numberChecker(num) {
    if(num > 0) {
        console.log("number is positive");
    }
    else if (num < 0) {
        console.log("number is negative");
    }
    else {
        console.log("number is zero!");
    }
}

function countdownFunction(num) {
    for(let i = num; i > 0; i--) {
        console.log(num);
        num -= 1;
    }
}

function progressChecker(studentName, score) {
    if(score >= 90) {
        console.log(studentName + ", Excellent work!");
    }
    else if (score >= 75 && score <= 89) {
        console.log(studentName + ", Good job!");
    }
    else {
        console.log(studentName + ", Keep practicing...");
    }
}

function classRoster() {
    let arr = ["Jordan", "Coreye", "Terrance", "Samantha", "Stephanie"];

    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
 

main();




// Reflection Questions

//1. Which topic felt easiest for you

//Definitely the variables, they are easy in every language!

//2. Which topic felt most challenging?

//Remembering the difference between == and ===, 
// aswell as explaining how each part of the code works
// had me spend more time on the assignment then usual.

//3. How do variables, conditionals, functions, and looops
//work together in a program?

//They are like tools in a toolbox, you use them when you 
//think you can get the job done with them. Some are more
//efficient than others depending on the task.


//4 One question I still have about Javascript?

//Why is Javascript not utilized more in production environments?

