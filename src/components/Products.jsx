import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import { setCartToLocalStorage } from "../utils/localstorage";

function Products() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleCartItems = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    setCartToLocalStorage(updatedCartItems);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
      <div>
        <h3>Products:</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", padding: "10px", background: "gray" }}>
          {products.map((product) => (
            <Product key={product.id} product={product} handleCartItems={handleCartItems} />
          ))}
        </div>
      </div>
      <div>
        <h3>Cart:</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "10px", padding: "10px", background: "gray" }}>
          {cartItems.map((product) => (
            <Cart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
