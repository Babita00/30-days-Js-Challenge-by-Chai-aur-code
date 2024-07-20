// Activity 1: If-Else Statements

// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function checkNumber(num) {
  if (num > 0) {
    console.log(`the number ${num} is positive`);
  } else if (num < 0) {
    console.log(`the number ${num} is negative`);
  } else {
    console.log(`the number ${num} is zero`);
  }
}

checkNumber(90);
checkNumber(-8);
checkNumber(0);

function checkAge(age) {
  if (age >= 18) {
    console.log(`The person whose age is ${age} is elligible to vote`);
  }
  if (age < 18) {
    console.log("The person is not elligible to vote");
  }
}

checkAge(10);
checkAge(28);

// Activity 2: Nested If-Else Statements

// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

function findLarget(a, b, c) {
  if (a > b) {
    if (a > c) {
      console.log(`${a} is largest number`);
    } else {
      console.log(`${c} is largest number`);
    }
  } else {
    if (b > c) {
      console.log(`${b} is largest number`);
    } else {
      console.log(`${c} is largest number`);
    }
  }
}
findLarget(10, 20, 3);

// Activity 3: Switch Case

// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function week(day) {
  switch (day) {
    case 1:
      console.log("Sunday");
      break;

    case 3:
      console.log("Tuesday");
      break;

    case 4:
      console.log("Wednesday");
      break;

    case 5:
      console.log("Tuesday");
      break;

    case 6:
      console.log("Friday");
      break;

    case 6:
      console.log("Saturday");
      break;
  }
}

week(1);

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a the console. score and log the grade to
function grading(marks) {
  let grade;
  switch (true) {
    case marks >= 90 && marks <= 100:
      grade = "A";
      break;

    case marks >= 80 && marks <= 90:
      grade = "B";
      break;

    case marks >= 70 && marks <= 80:
      grade = "C";
      break;

    case marks >= 60 && marks <= 70:
      grade = "D";
      break;

    case marks >= 0 && marks < 60:
      grade = "F";
      break;
    default:
      console.log("Invalid marks. Please enter a number between 0 and 100.");
      return;
  }
  console.log(`The grade is ${grade}`);
}

grading(90);
grading(85);
grading(75);
grading(65);
grading(55);
grading(105); // Output: Invalid marks. Please enter a number between 0 and 100.

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

function chekEvenOdd(num) {
  const result = num % 2 === 0 ? "even" : "odd";
  console.log(`The number ${num} is ${result}.`);
}
chekEvenOdd(60);
chekEvenOdd(75);

// Activity 5: Combining Conditions

// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function isLeapYear(year) {
  let result;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        result = "is a leap year";
      } else {
        result = "is not a leap year";
      }
    } else {
      result = "is a leap year";
    }
  } else {
    result = "is not a leap year";
  }

  console.log(`The year ${year} ${result}.`);
}

isLeapYear(2024);
isLeapYear(1900);
isLeapYear(2000);
isLeapYear(2021);
