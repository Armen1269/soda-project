function toogleCartstatus() {
const cartWrapper = document.querySelector(".cart-wrapper")
const cartEmpty = document.querySelector("[data-cart-empty]") 
const cardBody = document.querySelector("#order-form");


if(cartWrapper.children.length ===0 ){
	cartEmpty.classList.remove("none")
	cardBody.classList.add("none")
//cartEmpty.style.display = "block"
}else {
	//cartEmpty.style.display = "none";
	cartEmpty.classList.add("none");
		cardBody.classList.remove("none");
}
}
toogleCartstatus()