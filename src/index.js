import {createProducts, clearProducts, defaultProducts } from "/src/classes.js";
import {addProduct} from "/src/api.js";
let searchBar = document.getElementById("search_bar");
let submitBtn = document.getElementById("submit")
let resetBtn = document.getElementById("reset_button")
let foodForm = document.getElementById("productAddition")
// Manage user changing things on the page


//Default Food items on Page when it loads.
defaultProducts()

//Search bar submission handling
submitBtn.addEventListener("click", function(event){
    let searchBarData = searchBar.value
    searchForFood(String(searchBarData));
});

//Reset the Search Bar and the products area
resetBtn.addEventListener("click", function(event){
    searchBar.value = "";
    clearProducts();
    defaultProducts();
});

function searchForFood(barcode){
    clearProducts();
    createProducts(barcode);
}

//Handle the form submission
foodForm.addEventListener("formdata", function(event){
    event.preventDefault();
    const data = event.formData;
    addProduct(data);
});