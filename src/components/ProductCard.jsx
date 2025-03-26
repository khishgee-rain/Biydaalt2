import React, { useState } from "react";
import "../styles.css";

const ProductCard = ({ product, addToCart, onOpenModal }) => {
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div className="product-card">
      <img
        src={product.picture}
        alt={product.name}
        className="product-image"
        onClick={onOpenModal} // Зөвхөн нэг модал нээнэ
        style={{ cursor: "pointer" }}
      />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>

      <div className="product-colors">
        {product.colors?.map((color, index) => (
          <label key={index} className="color-label">
            <input
              type="radio"
              name={`color-${product.id}`}
              value={color}
              checked={selectedColor === color}
              onChange={() => setSelectedColor(color)}
            />
            <span
              className="color-circle"
              style={{
                backgroundColor: color,
                border: selectedColor === color ? "3px solid black" : "1px solid transparent",
              }}
            ></span>
          </label>
        ))}
      </div>

      <h2>SIZE: {count}</h2>
      <div className="size-container">
        <button onClick={decreaseCount} disabled={count === 1}>—</button>
        <button onClick={increaseCount}>+</button>
      </div>

      <button className="add-to-cart" onClick={() => addToCart(product, selectedColor, count)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
