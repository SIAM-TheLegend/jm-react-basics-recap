const setCartToLocalStorage = (item) => {
  // check if localStorage has cart from before
  const isCart = localStorage.getItem("cart");

  // Set items on cart if previously had a cart, otherwise initialize it
  if (isCart) {
    localStorage.setItem("cart", JSON.stringify(item));
  } else {
    localStorage.setItem("cart", "[]");
  }
};

export { setCartToLocalStorage };
