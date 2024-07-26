// Activity 1: Object Creation and Access

// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console. •
// Task 2: Access and log the title and author properties of the book object.
console.log("Activity 1:(Task 1 and 2) ");
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: "1960",
};
console.log(book);
console.log(`Title:${book.title}`);
console.log(`Author:${book.author}`);
// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log("Activity 2 (task 3 and 4)");
const books = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: "1960",
  getTitleAndAuthor() {
    return `${this.title} by ${this.author}`;
  },
  updateNewYear(newYear) {
    this.year = newYear;
  },
};
console.log(books.getTitleAndAuthor());

books.updateNewYear(2000);
console.log(books);

// Activity 3: Nested Objects

// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
console.log("Activity 3: task 5");
const library = {
  name: "City Library",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      year: 1925,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
    },
    {
      title: "The 1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
    },
  ],
};

console.log(library);
// • Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("task 6");

console.log(`Library: ${library.name}`);
console.log("Book Titles:");
library.books.forEach((book) => {
  console.log(book.title);
});

// Activity 4: The this Keyword

// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log("Activity 4:Task 7");
const lib = {
  name: "City Library",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      year: 1925,
      getTitleAndYearr() {
        return `${this.title} in ${this.year}`;
      },
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      getTitleAndYearr() {
        return `${this.title} in ${this.year}`;
      },
    },
    {
      title: "The 1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      getTitleAndYearr() {
        return `${this.title} in ${this.year}`;
      },
    },
  ],
};
lib.books.forEach((book) => {
  console.log(book.getTitleAndYearr());
});
// Activity 5: Object Iteration

// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
console.log("ACTIVITY 5: task 8");

library.books.forEach((book) => {
  for (let prop in book) {
    if (book.hasOwnProperty(prop)) {
      console.log(`${prop}: ${book[prop]}`);
    }
  }
});
// • Task 9: Use object.keys and object.values methods to log all the keys and values of the book object.
const boook = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: "1960",
};

const keys = Object.keys(boook);
const values = Object.values(boook);

console.log("Keys:", keys);
console.log("Values:", values);

// If you want to log both keys and values together
keys.forEach((key, index) => {
  console.log(`${key}: ${values[index]}`);
});
