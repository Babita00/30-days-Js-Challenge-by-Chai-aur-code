// Activity 1: Selecting and Manipulating Elements

// • Task 1: Select an HTML element by its ID and change its text content.
// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("myElement").textContent = "New Text Content";

// • Task 2: Select an HTML element by its class and change its background color.
// Task 2: Select an HTML element by its class and change its background color.
const elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = "lightblue";
}
