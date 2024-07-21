// Activity 1: Array Creation and Access

// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let arr = [1, 2, 3, 4, 5];
console.log(arr);
// • Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Activity 2: Array Methods (Basic)

// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(9);
console.log("after update:", arr);
// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log("after pop", arr);
// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log("After shift:", arr);
// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(7);
console.log("After unshift", arr);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let doublearr = arr.map((n) => n * 2);
console.log("After map:", doublearr);
// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let array = [1, 20, 5, 3, 9];
let sum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum using reduce:", sum);

// Activity 4: Array Iteration

// • Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("using for loop");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Using for each loop");

array.forEach((element) => {
  console.log(element);
});

// Activity 5: Multi-dimensional Arrays

// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 7, 8],
];
console.log(matrix);
// • Task 13: Access and log a specific element from the two-dimensional array.
console.log("Each element in 2d matrix is:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
