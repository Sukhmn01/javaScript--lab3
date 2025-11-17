// =======================================================
// Attribution:
//  The use of "\n" for line breaks in strings
//  was learned from  Codecademy.
// =======================================================

// constructor function for ToyCar
function ToyCar(price, inStock) {
     // fixed details for this toy car
    this.SKU = "32993/4-JADA-BLUE";// unique identifier for the car
    this.UPC = "680334698793"; //product Code
    this.brand = "Chevrolet";// car brand
    this.model = "Camaro";// car model
    this.color = "Blue";  // car color
    this.decade = "After 2000"; //decade of the car
    this.packaging = "Window Box";
    this.scale = "1/24 Scale"; // Ssale of the model
    this.vehicleType = "Muscle Car"; //type of vehicle

    this.price = price; // Price, set from the input field
    this.inStock = inStock;  // Stock status, from checkbox

      // method to show all the info about this car
     this.getInfo = function() {
        return "SKU: " + this.SKU + "\n" +
               "UPC: " + this.UPC + "\n" +
               "Brand: " + this.brand + "\n" +
               "Model: " + this.model + "\n" +
               "Color: " + this.color + "\n" +
               "Decade: " + this.decade + "\n" +
               "Packaging: " + this.packaging + "\n" +
               "Scale: " + this.scale + "\n" +
               "Vehicle Type: " + this.vehicleType + "\n" +
               "Price: $" + this.price + "\n" +
               "In Stock: " + this.inStock; // show if the car is available at the end
    };
}

// grab the button from the page that the user clicks to create a new car
const createBtn = document.getElementById("createCar");

// grab the div where we want to display the toy car details
const carOutput = document.getElementById("carOutput");

// user clicks the "Create Car" button
createBtn.onclick = function() {
     // create a new ToyCar object
    const car = new ToyCar(
        parseFloat(document.getElementById("price").value), // Get the price
        document.getElementById("stock").checked,  // Check if in stock
    );
   
    // show the car info in the output div
    carOutput.textContent = car.getInfo();
};