//For getting stuff from the foodish-api
async function getFoodIMG(food) {
  let foodName = String(food);
  if (foodName.match(/\d+/g)) {
    throw new Error("Invalid food name.");
  }


  //Try to get the requested food image.
  try {
    let foodReq = await axios({
      url: "pizza",
      method: "get",
      baseURL: "https://foodish-api.com/api/images/",
    });
    let foodimg = document.createElement("img");
    foodimg.src = foodReq.data.image;
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
    //Try to get the food nutrion value from another api
    let foodBarCode = String(barcode);
    let recipe = await axios({
        url: foodBarCode,
        method: "get",
        baseURL: "https://world.openfoodfacts.org/api/v2/search/"
      });  
      console.log(recipe.data.products)
}

getFoodIMG("pizza");
getFoodNutrition("30176204220A03")
