import { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <h3>Products:</h3>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
