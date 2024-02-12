export { getFoodIMG, getFoodNutrition, addProduct };
//For getting stuff from the OpenFoodFacts API

async function getFoodIMG(barcode) {
  let foodBarCode = barcode;
  if (foodBarCode.match(/\w\s+/g)) {
    throw new Error("Invalid food barcode.");
  }

  //Try to get the requested food image.
  try {
    let foodReq = await axios({
      url: foodBarCode,
      method: "get",
      baseURL: "https://world.openfoodfacts.org/api/v2/search/",
    });
    return foodReq.data.products.find((item) => item._id === foodBarCode)
      .image_nutrition_small_url;
  } catch (error) {
    //Throw an error if the food image URL can't be found.
    console.log(error + " Food not found.");
    return error;
  }
}

async function getFoodNutrition(barcode) {
  //Try to get the food nutrition and other information from the API, return it.
  let foodBarCode = barcode;
  try {
    let foodDataSearch = await axios({
      url: foodBarCode,
      method: "get",
      baseURL: "https://world.openfoodfacts.org/api/v2/search/",
    });
    let foodData = foodDataSearch.data.products.find(
      (item) => item._id === foodBarCode
    );

    let foodInfoArr = {
      name: foodData.product_name,
      description: Object.values(foodData.category_properties)[0],
      allergens: foodData.allergens,
      categories: foodData.categories_hierarchy,
      company_name: foodData.brands_tags,
      ingredients_list: foodData.ingredients_text,
    };
    return foodInfoArr;
  } catch (error) {
    //Throw an error if the food data can't be found.
    console.log(error + " Food not found.");
    return error;
  }
}

function addProduct(arr) {
  try {
    axios
      .post("https://world.openfoodfacts.org/cgi/product_jqm2.pl", null, {
        params: {
          code: arr[0],
          user_id: arr[1],
          comment: arr[2],
          brands: arr[3],
          labels: arr[4],
          categories: arr[5],
          packaging: arr[6],
        },
      })
      .then(alert("Form submitted sucessfully"));
  } catch (error) {
    console.log(error + " Couldn't submit food!");
    return error;
  }
}
