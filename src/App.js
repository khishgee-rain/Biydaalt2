import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Productssection from './components/Productssection';
import ProtectedRoute from './ProtectedRoute';
import Login from './login';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import "./components/styles.css"; 



function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <ProductList />
    </div>
  );
}

function AddProducts() { 
  return (
    <div style={{ padding: 20 }}>
      <h2>Add New Product</h2>
      <AddProduct />
    </div>
  )
}

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
    </div>
  );
}

function Products() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Products:</h2>
      <Productssection />
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
      
      {user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>Logout</span>}

    </nav>
  );
}

function App() {
  const [user, setUser] = useState(null);

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
              <Products />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        
      </Routes>
    </>
  );
}

export default App;