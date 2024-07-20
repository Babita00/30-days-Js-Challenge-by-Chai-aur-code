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
