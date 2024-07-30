// Activity 1: Selecting and Manipulating Elements

// • Task 1: Select an HTML element by its ID and change its text content.
// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("myElement").textContent = "New Text Content";

// • Task 2: Select an HTML element by its class and change its background color.
let accessClass = document.querySelector(".myclass1");
accessClass.style.backgroundColor = "red";

const elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = "lightblue";
}

// Activity 2: Creating and Appending Elements

// • Task 3: Create a new div element with some text content and append it to the body.
let newElement = document.createElement("div");
newElement.innerText = "Welcome to 30 days js challenge";
document.body.append(newElement);

// • Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement("li");
// Set the content of the new li element
newLi.textContent = "Awasthi";
// Append the new li element to the existing ul list
const ul = document.getElementById("list");
ul.appendChild(newLi);

// Activity 3: Removing Elements

// • Task 5: Select an HTML element and remove it from the DOM.
const element = document.getElementById("removeThis");
element.remove();
// • Task 6: Remove the last child of a specific HTML element.
const ull = document.getElementById("list");
ull.appendChild(newLi);
ull.removeChild(ul.lastElementChild);

// Activity 4: Modifying Attributes and Classes

// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const img = document.getElementById("myImage");
img.setAttribute(
  "src",
  "https://3.bp.blogspot.com/-VqStpD8Y8IA/UTLcljrF7MI/AAAAAAAAHBI/2FEj9AjLvUI/s1600/Lord+Krishna+4.jpg"
);

// • Task 8: Add and remove a CSS class to/from an HTML element.
document.getElementById("addButton").addEventListener("click", function () {
  document.getElementById("myParagraph").classList.add("highlight");
});

document.getElementById("removeButton").addEventListener("click", function () {
  document.getElementById("myParagraph").classList.remove("highlight");
});

// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("Paragraph").textContent = "Text has been changed!";
  });
// • Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById("myDiv").addEventListener("mouseover", function () {
  this.style.borderColor = "red";
});

document.getElementById("myDiv").addEventListener("mouseout", function () {
  this.style.borderColor = "black";
});
