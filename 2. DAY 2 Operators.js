//Activity 1: Arithmetic Operations

// • Task 1: Write a program to add two numbers and log the result to the console.
// • Task 2: Write a program to subtract two numbers and log the result to the console.
// Task 3: Write a program to multiply two numbers and log the result to the console.
// Task 4: Write a program to divide two numbers and log the result to the console.
// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let a = 50;
let b = 10;
const sum = a + b;
const sub = a - b;
const mul = a * b;
const div = a / b;
const rem = a % b;
console.log("sddition:", sum);
console.log(`subtracted value is:${sub}`);
console.log(`multliplication ${mul}`);
console.log("division:", div);
console.log("Multiplication:", mul);

//OR
function addition(a, b) {
  const add = a + b;
  console.log(`The result of addition ${a} and ${b} is ${add}`);
}

function subtraction(a, b) {
  const sub = a - b;
  console.log(`The result of subtraction ${a} and ${b} is ${sub}`);
}

function multiplication(a, b) {
  const mul = a * b;
  console.log(`The result of multiplication ${a} and ${b} is ${mul}`);
}

function division(a, b) {
  if (b === 0) {
    console.log("division by 0 is not allowed");
  }
  const div = a / b;
  console.log(`The result of division ${a} and ${b} is ${div}`);
}

function reminder(a, b) {
  if (b === 0) {
    console.log("division by 0 is not allowed");
  }
  const rem = a % b;
  console.log(`The result of division ${a} and ${b} is ${rem}`);
}

addition(7, 9);
subtraction(7, 9);
division(10, 20);
multiplication(8, 0);
reminder(9, 8);

console.log("Using case");
function arithmeticOperation(a, b, operation) {
  let result;
  switch (operation) {
    case "+":
      result = a + b;
      console.log(`The result of addition ${a} and ${b} is ${result}`);
      break;
    case "-":
      result = a - b;
      console.log(`The result of subtract ${a} and ${b} is ${result}`);
      break;
    case "*":
      result = a * b;
      console.log(`The result of multiplication ${a} and ${b} is ${result}`);
      break;

    case "/":
      if (b === 0) {
        console.log("division by 0 is not allowed");
      }
      result = a / b;
      console.log(`The result of division ${a} and ${b} is ${result}`);
      break;
    case "%":
      if (b === 0) {
        console.log("division by 0 is not allowed");
      }
      result = a % b;
      console.log(`The result of division ${a} and ${b} is ${result}`);
      break;
  }
}
arithmeticOperation(5, 19, "-");
arithmeticOperation(5, 0, "/"); // to test division by zero
arithmeticOperation(5, 0, "%"); // to test division by zero
arithmeticOperation(10, 2, "*");
