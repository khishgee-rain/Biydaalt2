import React, { useState } from "react";
import "../styles.css";

const ProductCard = ({ product, addToCart }) => {
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, count);
  };

  return (
    <div className="product-card">
      <img src={product.picture} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>

      {/* COLOR CHANGE */}
      <div className="product-colors">
        {product.colors.map((color, index) => (
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

      {/* SIZE COUNTER */}
      <h2>SIZE: {count}</h2>
      <div className="size-container">
        <button onClick={decreaseCount} disabled={count === 1}>
          —
        </button>
        <button onClick={increaseCount}>+</button>
      </div>

      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;