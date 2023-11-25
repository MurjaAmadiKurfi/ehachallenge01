// script.js

document.addEventListener("DOMContentLoaded", function() {
    // This function will be called when the DOM is fully loaded

    // Prompt the user for their name
    var userName = prompt("Please enter your name:");

    // Check if the user entered a name
    if (userName !== null && userName !== "") {
        // Use document.write() to display "Hello username" in big bold letters
        document.write("<h1>Hello <strong>" + userName + "</strong>!</h1>");

        // Display an alert message
        alert("Hello " + userName + "!");
    } else {
        // If the user didn't enter a name, provide a default welcome message
        alert("You didn't enter a name. Welcome anyway!");
    }
});
