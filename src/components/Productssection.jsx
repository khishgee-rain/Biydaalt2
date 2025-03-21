import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../styles.css";
import "../filter.css";
import Filter from "./filter";

const Productsection = () => {
  const [query, setQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [cart, setCart] = useState([]); 
  const [isCartVisible, setIsCartVisible] = useState(false); 

  const products = [
    {
      id: 1,
      name: "Blood Orange",
      price: 19.99,
      colors: ["red", "blue", "green"],
      picture:
        "https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Kiwi",
      price: 24.99,
      colors: ["yellow", "purple", "black"],
      picture:
        "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Cherry",
      price: 29.99,
      colors: ["black", "pink", "orange"],
      picture:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXRzfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Orange",
      price: 15.99,
      colors: ["brown", "gray", "teal"],
      picture:
        "https://plus.unsplash.com/premium_photo-1675237625753-c01705e314bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Papaya",
      price: 39.99,
      colors: ["cyan", "magenta", "lime", "indigo"],
      picture:
        "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXRzfGVufDB8fDB8fHww",
    },
  ];

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query.toLowerCase()) &&
      (selectedColor === "" || product.colors?.includes(selectedColor)) &&
      (minPrice === "" || product.price >= parseFloat(minPrice)) &&
      (maxPrice === "" || product.price <= parseFloat(maxPrice))
    );
  });

  // Add product to cart
  const addToCart = (product, selectedColor, count) => {
    const item = {
      ...product,
      selectedColor,
      count,
    };
    setCart([...cart, item]);
  };

  // basket visibility
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  // Remove item from cart
  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Edit item quantity in cart
  const handleEditItem = (index) => {
    const newQuantity = prompt("Enter new quantity:", cart[index].count);
    if (newQuantity && !isNaN(newQuantity) && newQuantity > 0) {
      const updatedCart = [...cart];
      updatedCart[index].count = parseInt(newQuantity, 10);
      setCart(updatedCart);
    } else {
      alert("Please enter a valid quantity.");
    }
  };

  return (
    
    <div className="app-container">
      
      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search"
        />

        {/* Filter Component */}
        <Filter
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p className="no-results">No products match your search!</p>
        )}
      </div>

      
      <div className="cart-container">
        <button className="cart-button" onClick={toggleCart}>
          🛒
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
        {isCartVisible && (
          <div className="cart-dropdown">
            <h3>Your Cart</h3>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.picture} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p>{item.name}</p>
                    <p>Color: {item.selectedColor}</p>
                    <p>Qty: {item.count}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <div className="cart-item-actions">
                      <button className="edit-button" onClick={() => handleEditItem(index)}>
                        Edit
                      </button>
                      <button className="remove-button" onClick={() => handleRemoveItem(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Productsection;