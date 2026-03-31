// Practice 1
let myName = "Bryant";
let age = 23;
let isStudent = true;

console.log(myName)
console.log(age)
console.log(isStudent)

// Practice 2
let temperature = 80;

if(temperature < 60){
    console.log("It is cold.")
}
else{
    console.log("It is warm.")
}

//Practice 3
function sayHello(){
    console.log("HELLO!");
}

sayHello();

// Practice 4
let numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// Practice 5
let studentNames = ["Bryant", "Jordan", "Alex", "Taylor", "Chris"];

for(let i = 0; i < studentNames.length; i++){
    console.log(studentNames[i]);
}

// Practice 6
let favoriteFoods = ["Pizza", "Chicken", "Rice", "Pasta", "Burgers"];

function printFoods(){
    for(let i = 0; i < favoriteFoods.length; i++){
        console.log(favoriteFoods[i]);
    }
}

printFoods();

// Practice 7
let numbers2 = [10, 20, 30, 40, 50];

function printLargeNumbers(){
    for(let i = 0; i < numbers2.length; i++){
        if(numbers2[i] > 25){
            console.log(numbers2[i]);
        }
    }
}

printLargeNumbers();

// Practice 8
let ages = [12, 18, 21, 15, 30];

function checkAges(){
    for(let i = 0; i < ages.length; i++){
        if(ages[i] >= 18){
            console.log("Adult");
        }
        else{
            console.log("Minor");
        }
    }
}

checkAges();
