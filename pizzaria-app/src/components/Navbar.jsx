import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.jpeg";
import profile from "../assets/profile.jpg";
import { useAuth } from "../context/AuthContext";
import "./Navbar.scss";

export default function Navbar() {
  const { cartItems, clearCart } = useCart();
  const { isLoggedIn, username, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <span><b>The ULTIMATE HEAVEN TO YOUR TASTEBUDS !</b></span>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        <Link to="/order" className="nav-btn">Order Pizza</Link>
        <Link to="/build" className="nav-btn">Build Pizza</Link>

        {/* CART HOVER */}
        <div
          className="cart-hover-wrapper"
          onClick={() => navigate("/cart")}
        >
          <button className="cart-btn">
            VIEW CART ({cartItems.length})
          </button>

          <div className="cart-hover-preview">
            {cartItems.length === 0 ? (
              <p className="text-muted mb-0">Cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-hover-item">
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* PROFILE */}
        <div className="profile-hover">
          <img src={profile} alt="profile" />

          <div className="profile-preview">
            {!isLoggedIn ? (
              <>
                <p onClick={() => navigate("/login")}>Login</p>
                <p onClick={() => navigate("/signup")}>Signup</p>
              </>
            ) : (
              <>
                <p className="text-muted">Hi, {username}</p>
                <p
                  className="text-danger"
                  onClick={() => {
                    clearCart();
                    logout();
                    navigate("/");
                  }}
                >
                  Logout
                </p>
              </>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}
