//For getting stuff from the foodish-api
async function getFoodIMG(barcode) {
    let foodBarCode = String(barcode);
//   if (foodName.match(/\d+/g)) {
//     throw new Error("Invalid food name.");
//   }


  //Try to get the requested food image.
  try {
    let foodReq = await axios({
        url: foodBarCode,
        method: "get",
        baseURL: "https://world.openfoodfacts.org/api/v2/search/"
    });
    let foodimg = document.createElement("img");
    foodimg.src = foodReq.data.products.find(item => item._id === foodBarCode).image_nutrition_small_url;
    document.body.append(foodimg);
  } catch (error) {
    //Throw an error if the food can't be found.
    console.log(error + " Food not found.");
    let foodimg = document.createElement("img");
    foodimg.src = "images/404img.png";
    document.body.append(foodimg);
  }
}

async function getFoodNutrition(barcode){
    //Try to get the food nutrion value from another
    let foodBarCode = String(barcode);
    let foodData = await axios({
        url: foodBarCode,
        method: "get",
        baseURL: "https://world.openfoodfacts.org/api/v2/search/"
      });  
      console.log(foodData.data.products.find(item => item._id === foodBarCode))
}

getFoodIMG("3017620422003");
getFoodNutrition("3017620422003")
