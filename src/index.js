import {createProducts, clearProducts, defaultProducts } from "/src/classes.js";
let searchBar = document.getElementById("search_bar");
let submitBtn = document.getElementById("submit")
// Manage user changing things on the page


//Default Food items on Page when it loads.
defaultProducts()

//Search bar submission handling
submitBtn.addEventListener("click", function(event){
    let searchBarData = searchBar.value
    searchForFood(String(searchBarData));
});

function searchForFood(barcode){
    clearProducts();
    createProducts(barcode);
}