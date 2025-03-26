import React, { useState } from "react";
import "../styles.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [colors, setColors] = useState("");
  const [picture, setPicture] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !quantity || !picture || !colors) {
      alert("Please fill in all fields.");
      return;
    }

    const productData = {
      name,
      colors: colors.split(",").map((color) => color.trim()),
      price: Number(price), 
      quantity: Number(quantity), 
      picture,
    };

    try {
      setLoading(true); 

      const response = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add product");
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
      alert("Error adding product: " + error.message);
    } finally {
      setLoading(false); 
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
            required
          />
        </div>
        <div className="add-product__group">
          <label className="add-product__label">Quantity:</label>
          <input
            type="number"
            className="add-product__input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
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
        <button type="submit" className="add-product__button" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
