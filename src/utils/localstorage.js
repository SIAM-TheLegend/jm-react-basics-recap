// check if localStorage has cart from before
const isCart = localStorage.getItem("cart");

const setCartToLocalStorage = (item) => {
  // Set items on cart if previously had a cart, otherwise initialize it
  if (isCart) {
    localStorage.setItem("cart", JSON.stringify(item));
  } else {
    localStorage.setItem("cart", "[]");
  }
};

const fetchCartFromLocalStorage = (setCartItems) => {
  isCart ? setCartItems(JSON.parse(isCart)) : [];
};

export { setCartToLocalStorage, fetchCartFromLocalStorage };
