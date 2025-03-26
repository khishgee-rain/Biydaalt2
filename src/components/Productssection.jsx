import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Filter from "./filter";
import ProductModal from "./ProductModal";
import "../styles.css";
import "../filter.css";

const Productssection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(query.toLowerCase()) &&
      (selectedColor === "" || product.colors?.includes(selectedColor)) &&
      (minPrice === "" || product.price >= parseFloat(minPrice)) &&
      (maxPrice === "" || product.price <= parseFloat(maxPrice))
    );
  });

  const addToCart = (product, selectedColor, count) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedColor === selectedColor
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].count += count;
        return updatedCart;
      }

      return [...prevCart, { ...product, selectedColor, count }];
    });
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleEditItem = (index) => {
    const newQuantity = prompt("Enter new quantity:", cart[index].count);
    const newColor = prompt("Enter new color:", cart[index].selectedColor);

    
    if (newQuantity && !isNaN(newQuantity) && newQuantity > 0 && newColor) {
      const updatedCart = [...cart];
      updatedCart[index].count = parseInt(newQuantity, 10);
      updatedCart[index].selectedColor = newColor;
      setCart(updatedCart);
    } else {
      alert("Please enter a valid quantity and color.");
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app-container">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search"
        />

        <Filter
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
              onOpenModal={() => setActiveProduct(product)} 
            />
          ))
        ) : (
          <p className="no-results">No products match your search!</p>
        )}
      </div>

      <div className="cart-container">
        <button className="cart-button" onClick={toggleCart}>
          🛒 {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
        {isCartVisible && (
          <div className="cart-dropdown">
            <h3>Your Cart</h3>
            {cart.length > 0 ? (
              <>
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.picture} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <p>{item.name}</p>
                      <p>Color: {item.selectedColor}</p>
                      <p>Qty: {item.count}</p>
                      <p>Price: ${item.price}</p>
                      <div className="cart-item-actions">
                        <button className="edit-button" onClick={() => handleEditItem(index)}>Edit</button>
                        <button className="remove-button" onClick={() => setCart(cart.filter((_, i) => i !== index))}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        )}
      </div>

      {activeProduct && <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />}
    </div>
  );
};

export default Productssection;
