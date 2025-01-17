document.addEventListener("DOMContentLoaded", function() {
    // Change the background color of the body
    document.body.style.backgroundColor = "pink";
    alert("Welcome to my world");

     // Show the modal
     var modal = document.getElementById("myModal");
     modal.style.display = "block";
 
     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];
 
     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
         modal.style.display = "none";
     }
 
     // Function to close the modal
     function closeModal() {
         modal.style.display = "none";
     }
// Basic JavaScript Example

// Variables
var name = "John"; // String variable
var age = 30; // Number variable
var isStudent = true; // Boolean variable

// Function to display a greeting message
function greet() {
    var greeting = "Hello, " + name + "! You are " + age + " years old.";
    if (isStudent) {
        greeting += " You are a student.";
    } else {
        greeting += " You are not a student.";
    }
    alert(greeting);
}

// Call the greet function
greet();

// Arrays
var fruits = ["Apple", "Banana", "Cherry"];
alert("First fruit: " + fruits[0]); // Accessing array elements

// Objects
var person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
alert("Person's full name: " + person.fullName()); // Accessing object properties and methods

// Loops
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Logging each fruit to the console
}

// Conditionals
if (age > 18) {
    alert("You are an adult.");
} else {
    alert("You are a minor.");
}
});

