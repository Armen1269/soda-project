const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".card");

    const productInfo = {
      id: card.dataset.id,
      img: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText, // sranov  kanchumenq atributin  dra hamar []
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    const iteminCart = cartWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );
    console.log(iteminCart);

    if (iteminCart) {
      // console.log(iteminCart.querySelector("[data-counter]").innerText);
      const counterElement = iteminCart.querySelector("[data-counter]");
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.img}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<button class="items__control" data-action="minus">-</button>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<button class="items__control" data-action="plus">+</button>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML); //es  nor svoystvan ognuma e  mer hatml@  kod@ texadrel cartwraperri mej  isk  beforeend@ texadrel   verevic nerqev
    }
    card.querySelector("[data-counter]").innerText = "1";
    toogleCartstatus();

    calcCartPriceAndDelivery();
  }
});
