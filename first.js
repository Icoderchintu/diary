alert("Welcome to my webpage");
document.addEventListener("DOMContentLoaded", function() {
    // Change the background color of the body
    document.body.style.backgroundColor = "#f0f8ff";

    // Add a heading to the webpage
    var heading = document.createElement("h1");
    heading.textContent = "Welcome to My Awesome Webpage!";
    heading.style.textAlign = "center";
    heading.style.color = "#333";
    document.body.appendChild(heading);

    // Add a paragraph with some text
    var paragraph = document.createElement("p");
    paragraph.textContent = "This is a sample paragraph to make the webpage look more interesting.";
    paragraph.style.textAlign = "center";
    paragraph.style.color = "#666";
    document.body.appendChild(paragraph);
});

