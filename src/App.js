import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Productssection from './components/Productssection';
import ProtectedRoute from './ProtectedRoute';
import Login from './login';
import Signup from './Signup';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import ProductModal from './components/ProductModal';
import "./components/styles.css"; 

function Home() {
  return (
    <div className="page-container">
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page-container">
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <ProductList />
    </div>
  );
}

function AddProducts() { 
  return (
    <div className="page-container">
      <h2>Add New Product</h2>
      <AddProduct />
    </div>
  );
}

function NoMatch() {
  return (
    <div className="page-container">
      <h2>404: Page Not Found</h2>
    </div>
  );
}

function Products({ setActiveProduct }) {
  return (
    <div className="page-container">
      <h2>Products:</h2>
      <Productssection setActiveProduct={setActiveProduct} />
    </div>
  );
}

function Navigation({ user, setUser }) {
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    navigate('/');
  }

  return (
    <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>Home</Link>
      <Link to="/about" style={{ padding: 5 }}>About</Link>
      <Link to="/products" style={{ padding: 5 }}>Products</Link>
      <span> | </span>
      
      {user && <Link to="/add-product" style={{ padding: 5 }}>Add Product</Link>}
      
      {!user && <Link to="/login" style={{ padding: 5 }}>Login</Link>}
      
      {!user && <Link to="/Signup" style={{ padding: 5 }}>Sign Up</Link>}

      {user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>Logout</span>}
    </nav>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null); // ✅ Нэг л бүтээгдэхүүний модал идэвхжихээр тохируулна

  return (
    <>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
        <Route 
          path="/add-product" 
          element={
            <ProtectedRoute user={user}>
              <AddProducts />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/products" 
          element={
            <ProtectedRoute user={user}>
              <Products setActiveProduct={setActiveProduct} />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/signup" element={<Signup onSignup={setUser} />} />
      </Routes>

      {activeProduct && <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />}
    </>
  );
}

export default App;
