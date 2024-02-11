//For getting stuff from the foodish-api
async function getFoodIMG(food, barcode) {
  let foodName = String(food);
  let foodBarCode = String(barcode);
  if (foodName.match(/\d+/g)) {
    throw new Error("Invalid food name.");
  }

  let recipe = await axios({
    url: foodBarCode,
    method: "get",
    baseURL: "https://world.openfoodfacts.org/api/v2/product/"
  });
  console.log(recipe)
  //Try to get the requested food image.
  try {
    let foodReq = await axios({
      url: foodName,
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
getFoodIMG("pizza",3017620422003);
