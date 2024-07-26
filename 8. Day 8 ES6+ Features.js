// Activity 1: Template Literals

// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

// • Task 2: Create a multi-line string using template literals and log it to the console.
const name = "Alice";
const age = 30;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

const multiLineString = `This is a string
that spans multiple
lines.`;

console.log(multiLineString);

// Activity 2: Destructuring

// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

// • Task 4: Use object destructuring to extract the title and author from a book obact and log them to the console.

const numbers = [10, 20, 30, 40];

const [first, second] = numbers;
console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

const book = {
  title: "Abbbcc bnkjhgyftf",
  author: "George Orwell",
  year: 1949,
};

const { title, author } = book;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

// Activity 3: Spread and Rest Operators

// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional

// elements, and log the new array to the console.

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const existingArray = [1, 2, 3];
const newArray = [...existingArray, 4, 5, 6];

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15)); // Output: 30

// Activity 4: Default Parameters

// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 3)); // Output: 15 (both parameters provided)
console.log(multiply(5)); // Output: 5  (second parameter uses default value of 1)

// Activity 5: Enhanced Object Literals

// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// • Task 9: Create an object with computed property names based on variables and log the object to the console.

const naame = "Alice";
const aage = 30;

const person = {
  naame, // shorthand for name: name
  aage, // shorthand for age: age
  greet() {
    // method shorthand
    console.log(
      `Hello, my name is ${this.naame} and I am ${this.aage} years old.`
    );
  },
};

console.log(person);
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.

const key1 = "firstName";
const key2 = "lastName";

const user = {
  [key1]: "John",
  [key2]: "Doe",
};

console.log(user); // Output: { firstName: 'John', lastName: 'Doe' }
