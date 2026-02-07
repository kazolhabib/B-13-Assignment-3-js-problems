// discount
function newPrice(currentPrice, discount) {
    let oldPrice = currentPrice;
    let discountPrice = discount;

    if(typeof oldPrice !== 'number'){
        return "Invalid";
    }
    if(typeof discountPrice !== 'number'){
        return "Invalid";
    }
    if(discountPrice < 0 || discountPrice > 100){
        return "Invalid";
    }

   let discountedPrice = (currentPrice * discount) / 100; //300 taka
   let latestPrice = currentPrice - discountedPrice;
   return latestPrice.toFixed(3);
}

console.log(newPrice(1500, 20))