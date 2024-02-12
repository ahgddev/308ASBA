//For the Javascript classes creating content on the webpage.
import { getFoodIMG, getFoodNutrition } from "/src/api.js";

//Base Food Shell
let ourProductsSection = document.getElementById("ourProducts");

async function createProducts(barcode) {
  let foodIMGURL = await getFoodIMG(barcode);
  let foodData = await getFoodNutrition(barcode);

  let fragment = new DocumentFragment();
  let img = document.createElement("img");
  img.src = foodIMGURL;

  let dataHolder = document.createElement("div");
  let dTable = document.createElement("table");
  for (let [key, value] of Object.entries(foodData)) {
    let keyName = document.createElement("p");
    let valueData = document.createElement("p");
    keyName.innerHTML = `<tr>${key}</tr>`;
    valueData.innerHTML = `<tr>${value}</tr>`;
    dTable.append(keyName, valueData);
  }
  dataHolder.append(img);
  dataHolder.append(dTable);
  fragment.appendChild(dataHolder);
  ourProductsSection.append(fragment);
}

createProducts("3274080005003");
createProducts("7622210449283");
createProducts("3017620425035");
createProducts("3175680011480");

// let foodimg = document.createElement("img");
//     foodimg.src = foodReq.data.products.find(
//       (item) => item._id === foodBarCode
//     ).image_nutrition_small_url;
//     document.body.append(foodimg);

//For foodimg errors
// let foodimg = document.createElement("img");
//     foodimg.src = "images/404img.png";
//     document.body.append(foodimg);
