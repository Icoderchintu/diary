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
});

