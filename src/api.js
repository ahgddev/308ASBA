export {getFoodIMG, getFoodNutrition, addProduct};
//For getting stuff from the OpenFoodFacts API

async function getFoodIMG(barcode) {
  let foodBarCode = String(barcode);
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
    console.log(foodReq.data.products)
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
  let foodBarCode = String(barcode);
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
      name: foodData.abbreviated_product_name,
      description: foodData.category_properties,
      allergens: foodData.allergens,
      categories: foodData.categories_hierarchy,
      nutrition_levels: foodData.nutrient_levels,
      company_name: foodData.customer_service,
      ingredients_list: foodData.ingredients_text_en_ocr_1642445989,
    };
    return foodInfoArr;
  } catch (error) {
    //Throw an error if the food data can't be found.
    console.log(error + " Food not found.");
    return error;
  }
}

function addProduct(barcode) {
  let foodBarCode = String(barcode);
  try {
    axios.post(
      "https://world.openfoodfacts.org/cgi/product_jqm2.pl",
      null,
      {
        params: {
            code: foodBarCode,
            user_id:  'myusername',
            comment: 'new packaging from super-app',
            brands: 's,',
            labels: 'r,',
            categories: 's,',
            packaging: 'Frozen'
        },
      }
    ).then(
    console.log("All good.")
    )
  } catch (error) {
    console.log(error + " Couldn't submit food!");
    return error;
  }
}
