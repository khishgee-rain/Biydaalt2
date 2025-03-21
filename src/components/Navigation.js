import { Link, useNavigate } from 'react-router-dom';

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
      {user ? (
        <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>Logout</span>
      ) : (
        <Link to="/login" style={{ padding: 5 }}>Login</Link>
      )}
    </nav>
  );
}

export default Navigation;
