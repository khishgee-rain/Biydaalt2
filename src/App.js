
// import MyButton from "./components/my-button";
// import MyTable from "./components/table";
// import UserCard from './components/card.jsx';
// import './App.css';

// function App() {
  
//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <MyButton />
//       <UserCard />
//       <MyTable />
//     </div>
//   );
// }

// export default App;


// /*<div>
//       <h1>BUTTON COMPONENT</h1>
//       <div>
      
//         <Button label="Primary" type="primary" />
//         <Button label="Secondary" type="secondary" />
//       </div>
//       <div>
//         <Button label="Success" type="success" />
//         <Button label="Danger" type="danger" />
//       </div>
//     </div> */

// import React from 'react';
// import Counter from './components/Counter';
// import ColorList from './components/ColorList';
// import './App.css'


// function App() {
//   return (
//     <div>
//       <h1>Number Counter</h1>
//       <Counter />
//       <ColorList />

//     </div>
//   )
// };

// export default App;










// import React, { useState } from "react";
// import ProductCard from "./components/kart";
// import "./styles.css";
// import "./filter.css"
// import Filter from "./components/filter";


// const App = () => {
//   const [query, setQuery] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   // Mock product data (Replace with API data if needed)
//   const products = [ {
//     id: 1,
//     name: "blood orange",
//     price: 19.99,
//     colors: ["red", "blue", "green"],
//     picture: "https://plus.unsplash.com/premium_photo-1671379041175-782d15092945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXRzfGVufDB8fDB8fHww",
//   },
//   {
//     id: 2,
//     name: "Kiwi",
//     price: 24.99,
//     colors: ["yellow", "purple", "black"],
//     picture: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzfGVufDB8fDB8fHww",
//   },
//   {
//     id: 3,
//     name: "Cherry",
//     price: 29.99,
//     colors: ["black", "pink", "orange"],
//     picture: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXRzfGVufDB8fDB8fHww",
//   },
//   {
//     id: 4,
//     name: "Orange",
//     price: 15.99,
//     colors: ["brown", "gray", "teal"],
//     picture: "https://plus.unsplash.com/premium_photo-1675237625753-c01705e314bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzfGVufDB8fDB8fHww",
//   },
//   {
//     id: 5,
//     name: "Papaya",
//     price: 39.99,
//     colors: ["cyan", "magenta", "lime", "indigo"],
//     picture: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXRzfGVufDB8fDB8fHww",
//   }, ];

//   // Filtering 
//   const filteredProducts = products.filter((product) => {
//     return (
//       product.name.toLowerCase().includes(query.toLowerCase()) &&
//       (selectedColor === "" || product.colors?.includes(selectedColor)) &&
//       (minPrice === "" || product.price >= parseFloat(minPrice)) &&
//       (maxPrice === "" || product.price <= parseFloat(maxPrice))
//     );
//   });

//   return (
//     <div className="app-container">
//       {/* Search Bar */}
//       <div>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="search"
//         />

//         {/* Filter Component */}
//         <Filter
//           selectedColor={selectedColor}
//           setSelectedColor={setSelectedColor}
//           minPrice={minPrice}
//           setMinPrice={setMinPrice}
//           maxPrice={maxPrice}
//           setMaxPrice={setMaxPrice}
//         />
//       </div>

//       {/* Product List */}
//       <div className="product-list">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <p className="no-results">No products match your search!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;




// import React from "react";
// // import Video from "./video.jsx"; 
// // import './video.css';

// const App = () => {
//   // const videoData = {
//   //   title: "Tsetse - Zuud ft. Jossey (Official Music Video)",
//   //   description: "Music video by Tsetse performing ZUUD. (C) 2022. Tsetse, Stream & Download ZUUD now!",
//   //   url: "https://www.youtube.com/embed/gmZS196BB18?si=pglLRYfp11YZFlw-",
//   //   thumbnail: "https://i.ytimg.com/vi/gmZS196BB18/maxresdefault.jpg" 
//   // };

//   return (
//     <div>
//     {/* <div className="app-container">
//       <h1>Video Gallery</h1>
//         <Video video={videoData} />
//       </div> */}
//         <imageCompressor />
//       </div>
//   );
// };

// export default App;


// import React from "react";
// import Display from "./display";
// import ButtonPanel from "./ButtonPanel";
// import ImageCompressor from "./components/ImageCompressor";
// import calculate from "./logic/calculate";
// import "./ButtonPanel.css";
// import "./App.css";

// export default class App extends React.Component {
//   state = {
//     total: null,
//     next: null,
//     operation: null,
//   };

//   handleClick = (buttonName) => {
//     this.setState(calculate(this.state, buttonName));
//   };

//   render() {
//     return (
//       <div className="component-app">
//         <h1>Calculator</h1>
//         <Display value={this.state.next || this.state.total || "0"} />
//         <ButtonPanel clickHandler={this.handleClick} />
//         <h1>Image Compressor</h1>
//         <ImageCompressor />
//       </div>
//     );
//   }
// }





import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Productssection from './components/Productssection';
import ProtectedRoute from './ProtectedRoute';
import Login from './login';

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
    </div>
  );
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
