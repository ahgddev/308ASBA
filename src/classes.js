//For the Javascript classes creating content on the webpage.
import { getFoodIMG, getFoodNutrition } from "/src/api.js";
export { createProducts, clearProducts, defaultProducts };

//Base Food Shell
let ourProductsSection = document.getElementById("ourProducts");

async function createProducts(barcode) {
  let foodIMGURL = await getFoodIMG(barcode);
  let foodData = await getFoodNutrition(barcode);

  let fragment = new DocumentFragment();
  let img = document.createElement("img");
  img.src = foodIMGURL;

  let dataHolder = document.createElement("div");
  dataHolder.append(img);
  for (let [key, value] of Object.entries(foodData)) {
    let keyName = document.createElement("p");
    let valueData = document.createElement("p");
    let divRow = document.createElement("div");
    keyName.innerHTML = key;
    if (value == undefined) {
      valueData.innerHTML = "No description";
    } else if (value == null || value == "") {
      valueData.innerHTML = "None";
    } else {
      valueData.innerHTML = value;
    }
    divRow.append(keyName, valueData);
    dataHolder.appendChild(divRow);
  }
  fragment.appendChild(dataHolder);
  ourProductsSection.append(fragment);
}

//Clear products out of the products section when searched.
function clearProducts() {
  ourProductsSection.innerHTML = "";
}

//Bring back products when search is cleared.
function defaultProducts() {
  createProducts("3274080005003");
  createProducts("7622210449283");
  createProducts("3017620425035");
  createProducts("3175680011480");
}
