import React from "react";
import "../styles.css";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={product.picture} alt={product.name} className="modal-image" />
        <h2>{product.name}</h2>
        <p>Quantity:{product.quantity}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductModal;
