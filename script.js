// script.js

document.addEventListener("DOMContentLoaded", function() {
    // This function will be called when the DOM is fully loaded

    // Define an array named "cars"
    var cars = ["Toyota", "Honda", "Mazda", "Mitsubishi", "Tesla"];

    // Log the first item and last item to the console
    console.log("First item:", cars[0]);
    console.log("Last item using length property:", cars[cars.length - 1]);

    // Add an item to the array
    cars.push("Mercedes-Benz");

    // Log the updated array to the console
    console.log("Updated array:", cars);

    // Loop through all items and log them to the console
    cars.forEach(function(car) {
        console.log(car);

        // Display each car image on the page (using placeholder image URLs)
        var img = document.createElement("img");
        img.src = "https://via.placeholder.com/150"; // You can replace this with the actual image URLs
        img.alt = car;
        document.body.appendChild(img);
    });
});
