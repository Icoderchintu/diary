// To create a JavaScript file, follow these steps:

// 1. Open your text editor or IDE (such as Visual Studio Code, Sublime Text, or Notepad++).
// 2. Create a new file by selecting "File" > "New File" from the menu or using the appropriate shortcut (e.g., Ctrl+N).
// 3. Write your JavaScript code in the new file. For example:
console.log("Hello, world!");

// 4. Save the file with a .js extension. For example, you can name it "script.js".
// 5. To include the JavaScript file in your HTML file, add the following <script> tag inside the <head> or <body> section of your HTML file:
<script src="script.js"></script>

// This will link the JavaScript file to your HTML file, allowing the JavaScript code to be executed when the HTML file is loaded in a web browser.
// This is a basic JavaScript code example with comments and explanations

// Declare a variable and assign a value to it
var greeting = "Hello, world!";

function displayGreeting() {
    // Log the greeting message to the console
    console.log(greeting);
}

// Call the function to display the greeting message
displayGreeting();
// Function to display the greeting message

// Declare a variable to hold a number
var number = 5;

// Function to calculate the square of a number
function calculateSquare(num) {
    // Return the square of the number
    return num * num;
}

// Call the function and store the result in a variable
var square = calculateSquare(number);

// Log the result to the console
console.log("The square of " + number + " is " + square);
