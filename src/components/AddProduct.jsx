import React, { useState } from "react";
import '../styles.css';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [colors, setColors] = useState("");
    const [picture, setPicture] = useState("");
    const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
        name,
        colors: colors.split(",").map((color) => color.trim()), 
        price: parseFloat(price),
        quantity: parseInt(quantity),
        picture,
    };

    try {
      const response = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const result = await response.json();
      alert("Product added successfully!");
      console.log(result);

        setName("");
        setColors("");
      setPrice("");
      setQuantity("");
        setPicture("");
        
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding product");
    }
  };

  return (
     <div className="add-product__container">
      <h2 className="add-product__title">Add Product</h2>
      <form className="add-product__form" onSubmit={handleSubmit}>
        <div className="add-product__group">
          <label className="add-product__label">Product Name:</label>
          <input
            type="text"
            className="add-product__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="add-product__group">
          <label className="add-product__label">Colors (comma-separated):</label>
          <input
            type="text"
            className="add-product__input"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
            required
          />
        </div>
        <div className="add-product__group">
          <label className="add-product__label">Price:</label>
          <input
            type="number"
            className="add-product__input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
              </div>
              <div className="add-product__group">
          <label className="add-product__label">Quantity:</label>
          <input
            type="text"
            className="add-product__input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
              </div>
        <div className="add-product__group">
          <label className="add-product__label">Image URL:</label>
          <input
            type="text"
            className="add-product__input"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-product__button">Add Product</button>
      </form>
    </div>
  );
};


export default AddProduct;
