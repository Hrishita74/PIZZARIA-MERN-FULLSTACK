import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.jpeg";
import profile from "../assets/profile.jpg";
import { useAuth } from "../context/AuthContext";


export default function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
 const { isLoggedIn, username, logout } = useAuth();



  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      
      {/* LOGO */}
      <div
        className="d-flex align-items-center gap-2"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} height="60" /> 
        <span className="text-warning fw-bold fs-5">
          The ULTIMATE HEAVEN TO YOUR TASTEBUDS !
        </span>
      </div>

      {/* order & build */}
      <div className="d-flex align-items-center gap-2">
        
        <Link to="/order" className="btn btn-outline-light">
          Order Pizza
        </Link>

        <Link to="/build" className="btn btn-outline-light">
          Build Pizza
        </Link>

        {/* CART DROPDOWN */}
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle fw-semibold"
            data-bs-toggle="dropdown"
          >
            Add to Cart ({cartItems.length})
          </button>

          <ul className="dropdown-menu dropdown-menu-end p-2">
            {cartItems.length === 0 && (
              <li className="dropdown-item text-muted">
                Cart is empty
              </li>
            )}

            {cartItems.map((i) => (
              <li key={i._id} className="dropdown-item">
                {i.name} x {i.quantity}
              </li>
            ))}

            <li>
              <Link
                to="/cart"
                className="dropdown-item text-center fw-bold"
              >
                View Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* PROFILE */}
        <div className="dropdown">
  <img
    src={profile}
    height="35"
    className="rounded-circle dropdown-toggle"
    data-bs-toggle="dropdown"
    style={{ cursor: "pointer" }}
  />

  <ul className="dropdown-menu dropdown-menu-end">
  {!isLoggedIn ? (
    <>
      <li>
        <Link className="dropdown-item" to="/login">
          Login
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/signup">
          Signup
        </Link>
      </li>
    </>
  ) : (
    <>
      <li className="dropdown-item text-muted">
        Logged in as <b>{username}</b>
      </li>
      <li>
        <button
          className="dropdown-item text-danger"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </li>
    </>
  )}
</ul>

</div>


      </div>
    </nav>
  );
}
