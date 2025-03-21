import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({ name: "", price: "", image: "" });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Product Name" onChange={handleChange} />
              <input type="text" name="color" placeholder="Color" onChange={handleChange} />
              <input type="number" name="price" placeholder="Price" onChange={handleChange} />
                <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
