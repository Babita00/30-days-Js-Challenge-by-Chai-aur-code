const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genre: "Fiction",
  year: 1925,
};
console.log(book.title);

console.log(book["genre"]);
console.log(`${book.author}`);

// Check if the book object has its own property 'title'
if (book.hasOwnProperty("title")) {
  console.log(`The book has a title: ${book.title}`);
}

// Check if the book object has its own property 'publisher'
// if (book.hasOwnProperty("publisher")) {
//   console.log(`The  publisher of book is ${book.publisher}`);
// } else {
//   console.log("The book does not have a publisher");
// }
