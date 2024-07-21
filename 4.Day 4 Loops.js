// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Task 2: Write a program to print the multiplication table of 5 using a for loop.
let n = 5;
for (let i = 1; i <= 10; i++) {
  let mul = n * i;
  console.log("multiplication:", mul);
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let num = 1;
while (num < 10) {
  sum += num;
  num++;
}
console.log("Sum of numbers from 1 to 10 is: ", sum);

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let number = 10;
while (number >= 1) {
  console.log(number);
  number--;
}

// Activity 3: Do... While Loop

// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let a = 1;
do {
  console.log("1 to 5 using Do while loop ", a);
  a++;
} while (a <= 5);

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let b = 1;
let fact = 1;
do {
  fact *= b;
  b++;
} while (b <= 5);
console.log(`the factorial of ${n} is ${fact}`);

// Activity 4: Nested Loops

// • Task 7: Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Activity 5: Loop Control Statements

// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

let c;
for (c = 1; c <= 10; c++) {
  if (c === 5) {
    continue;
  }
  console.log(c);
}
// • Task 9: Write a program to print numbers from 1 to 10, but stop the  loop when the number is 7 using the break statement.

let k;
for (k = 1; k <= 10; k++) {
  if (k === 7) {
    break;
  }
  console.log(k);
}

// Feature Request:

// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
console.log("prints numbers from 1 to 10 using a for loop and a while loop");
let numbers = 1;
while (numbers <= 10) {
  console.log(numbers);
  numbers++;
}
// 2. Multiplication Table Script : Create a script that prints the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  result = 5 * i;
  console.log("Multiplication of table 5 is:", result);
}

// 3 Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
//5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
