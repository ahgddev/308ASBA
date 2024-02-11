//For getting stuff from the API
async function getFoodIMG(food){
   let foodReq = await axios.get("https://foodish-api.com/api/images/biryani")
   let foodimg = document.createElement("img")
   foodimg.src = foodReq.data.image
    document.body.append(foodimg)
}
getFoodIMG()