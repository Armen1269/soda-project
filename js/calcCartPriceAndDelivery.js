function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceEL = document.querySelector(".total-price");
   const deliveryCost = document.querySelector(".delivery-cost");
	 const dataCartDelivery = document.querySelector("[data-cart-delivery]");
  let totalPrice = 0;
  cartItems.forEach((item) => {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");
    const currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });
  totalPriceEL.innerText = totalPrice;
console.log(totalPrice);

if(totalPrice===0){
dataCartDelivery.classList.add("none")
}else{
	dataCartDelivery.classList.remove("none")
}


  if (totalPrice>=600) {
deliveryCost.classList.add("free")
	deliveryCost.innerText = "անվճառ";
  }else{
		deliveryCost.classList.remove("free");
		deliveryCost.innerText = "250 դր"
	}
}
calcCartPriceAndDelivery();
