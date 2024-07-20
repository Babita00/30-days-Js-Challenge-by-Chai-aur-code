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

// Activity 2: Assignment Operators

// • Task 6: Use the += operator to add a number to a variable and log the result to the console.
// • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let subb = 6;
subb -= 2;
console.log("The subtraction is:", subb);
let summ = 10;
summ += 5;
console.log("the addition is:", summ);

// Activity 3: Comparison Operators

// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.

// • Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

// • Task 10: Write a program to compare two numbers using and and log the result to the console.

function compareNumber(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  }
  if (a < b) {
    console.log(`${a} is less than ${b}`);
  }
  if (a == b) {
    console.log(`${a} is equal to ${b}`);
  }
}
compareNumber(10, 9);
compareNumber(100, 100);
compareNumber(0, 9);
compareNumber(50, 90);

function compareNumbersGreaterEqualLessEqual(a, b) {
  if (a >= b) {
    console.log(`${a} is greater than or equal to ${b}`);
  } else if (a <= b) {
    console.log(`${a} is less than or equal to ${b}`);
  }
}

compareNumbersGreaterEqualLessEqual(10, 5);
compareNumbersGreaterEqualLessEqual(5, 10);
compareNumbersGreaterEqualLessEqual(7, 7);

function compareNumbersAnd(a, b) {
  if (a >= 0 && b >= 0) {
    console.log(`Both ${a} and ${b} are positive numbers`);
  } else if (a < 0 && b < 0) {
    console.log(`Both ${a} and ${b} are negative numbers`);
  } else {
    console.log(
      `One of ${a} or ${b} is positive and the other is non-positive`
    );
  }
}

// Example usage:
compareNumbersAnd(10, 5); // Logs: Both 10 and 5 are positive numbers
compareNumbersAnd(-5, -10); // Logs: Both -5 and -10 are non-positive numbers
compareNumbersAnd(7, -3); // Logs: One of 7 or -3 is positive and the other is non-positive

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

// • Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

// • Task 13: Write a program that uses the! operator to negate a condition and log the result to the console.

function combineConditionsAnd(a, b) {
  if (a > 0 && b > 0) {
    console.log(`Both ${a} and ${b} are positive numbers`);
  } else {
    console.log(`Either ${a} or ${b} (or both) are not positive numbers`);
  }
}

combineConditionsAnd(10, 5);
combineConditionsAnd(10, -5);
combineConditionsAnd(-10, -5);

function combineConditionsOr(a, b) {
  if (a > 0 || b > 0) {
    console.log(`At least one of ${a} or ${b} is a positive number`);
  } else {
    console.log(`Neither ${a} nor ${b} are positive numbers`);
  }
}

combineConditionsOr(10, 5);
combineConditionsOr(10, -5);
combineConditionsOr(-10, -5);

function negateCondition(a) {
  if (!a) {
    console.log(`${a} is falsy`);
  } else {
    console.log(`${a} is truthy`);
  }
}

// Example usage:
negateCondition(0); // Logs: 0 is falsy
negateCondition(1); // Logs: 1 is truthy
negateCondition(""); // Logs:  is falsy
negateCondition("Hello"); // Logs: Hello is truthy
negateCondition(null); // Logs: null is falsy
negateCondition(undefined); // Logs: undefined is falsy

// Activity 5: Ternary Operator

// • Task 14: Write a program that uses the ternary operator to check if a numbe is positive or negative and log the result to the console.

function checkPositiveOrNegative(num) {
  const result = num > 0 ? `${num} is positive` : `${num} is negative`;

  console.log(result);
}
checkPositiveOrNegative(10);
checkPositiveOrNegative(0);
checkPositiveOrNegative(-10);
