// Activity 1: Function Declaration

// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else if (num % 2 !== 0) {
    console.log(`${num} is odd`);
  }
}
checkEvenOdd(90);
checkEvenOdd(87);
// Task 2: Write a function to calculate the square of a number and return the result.
function square(number) {
  return number * number;
}
let result = square(9);
console.log(result);

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function maximum(a, b) {
  const max = a > b ? a : b;
  console.log(`The maximum of ${a} and ${b} is ${max}`);
}
maximum(8, 9);
// Task 4: Write a function expression to concatenate two strings and return the result.
let a = "Babita";
let b = "Awasthi";
let concat = a + " " + b;
console.log(`concatenation result of ${a} and ${b} is ${concat}`);

//OR
function concateString(str1, str2) {
  return str1 + str2;
}
let concatenate = concateString("hello", "World");
console.log(concatenate);

// Activity 3: Arrow Functions

// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
function sum(a, b) {
  return a + b;
}
sum = sum(19, 30);
console.log(`the sum of ${a} and ${b} is ${sum}`);
// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkString = (str, char) => {
  return str.includes(char);
};
let output = checkString("hello", "o");
console.log(output);

// Activity 4: Function Parameters and Default Values

// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(a, b = 20) {
  return a * b;
}
let result1 = product(5, 3); //b=3 works here
console.log("The product is:", result1);

let result2 = product(4);
console.log("The product is:", result2); //80 since b is default
// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greeting(name, age = 25) {
  console.log(`welcome our young ${name} sir of age ${age}.`);
}

greeting("mahi");
greeting("bob", 40);
//we can do like aboce example returning value

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

//or

//Write a higher-order function that takes another function and a number as arguments, and then calls the provided function that many times.

function higherFunction(fn, time) {
  for (i = 0; i <= time; i++) {
    fn();
  }
}
const number = (l = 90) => {
  console.log("number is:", l);
};
higherFunction(number, 3);

//another example

function repeatFunction(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}
const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3);

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies second function to the result

//takes two functions and a value
// applies the first function to the value,
//then applies the second function to the result.

function twoFunction(fn1, fn2, value) {
  return fn2(fn1(value));
}

// Function to square a number
const sqquare = (y) => {
  return y * y;
};

// Function to double a number
const double = (y) => {
  return y * 2;
};

// Example usage
let finalResult = twoFunction(sqquare, double, 4);
console.log(finalResult); // Output: 32 (because (4 * 4) * 2 = 16 * 2 = 32)

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

const calculateSum = (k, v) => {
  return k + v;
};
let addition = calculateSum(10, 90);
console.log(`The sum  is ${addition}`);
