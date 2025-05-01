// Numeric comparison
let num = 10;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// String comparison
let name = "Alice";
if (name === "Alice") {
    console.log("Hello, Alice!");
} else {
    console.log("Hello, stranger!");
}

// Boolean condition
let isTrue = true;
if (isTrue) {
    console.log("It's true!");
} else {
    console.log("It's false!");
}

// Multiple conditions
let age = 25;
if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}
// Ternary operator
let isEven = num % 2 === 0 ? true : false;
console.log(isEven ? "The number is even." : "The number is odd.");