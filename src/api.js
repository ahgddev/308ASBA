//For getting stuff from the foodish-api
async function getFoodIMG(food){
//    let foodReq = await axios.get("https://foodish-api.com/api/images/biryani", [
//     url: '/user', baseURL: 'https://some-domain.com/api'])
let foodName = String(food);

let foodReq = await axios({
    url: foodName,
    method: 'get',
    baseURL: 'https://foodish-api.com/api/images/'
  });
   let foodimg = document.createElement("img")
   foodimg.src = foodReq.data.image
    document.body.append(foodimg)
}
getFoodIMG(biryani)