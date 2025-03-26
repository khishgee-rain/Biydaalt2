import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Productssection from "./components/Productssection";

function Products() {
  return (
    <div className="page-container">
      <h2>Products:</h2>
      <Productssection />
    </div>
  );
}

function Login({ onLogin }) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  async function handleLogin() {
    const { username, password } = userData;

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login success");
        onLogin && onLogin({ username }); 
        navigate("/products"); 
      } else {
        alert(data.error || "Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
