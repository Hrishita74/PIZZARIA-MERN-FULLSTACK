
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { calculateGrandTotal } from "../../services/cartService";
import "./Cart.scss";

export default function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const navigate = useNavigate();
  const grandTotal = calculateGrandTotal(cartItems);

  const handlePayNow = () => {
    clearCart();
    navigate("/");
  };

  return (
    <div className="container mt-4 cart-page">
      <h2>Your Cart</h2>

      <div className="row">
        {/* CART ITEMS */}
        <div className="col-md-8">
          {cartItems.length === 0 && (
            <p className="text-muted">Your cart is empty</p>
          )}

          {cartItems.map((item, index) => (
            <div className="cart-item mb-3" key={index}>
              <div className="cart-info">
                <h5>{item.name}</h5>
                <p>Base Price: ₹{item.price}</p>

                {item.extras.length > 0 && (
                  <div className="extras">
                    <strong>Extras:</strong>
                    <ul>
                      {item.extras.map((e, i) => (
                        <li key={i}>
                          {e.tname} (+₹{e.price})
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="cart-actions">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    updateQuantity(index, item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    updateQuantity(index, item.quantity + 1)
                  }
                >
                  +
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="col-md-4">
          <div className="summary-box">
            <h4>Total Amount</h4>

            {cartItems.map((item, i) => (
              <p key={i}>
                {item.name} × {item.quantity} = ₹
                {item.totalPrice * item.quantity}
              </p>
            ))}

            <hr />

            <h5>Grand Total: ₹{grandTotal}</h5>

            <button
              className="btn btn-success w-100 mt-2"
              onClick={handlePayNow}
            >
              Pay Now
            </button>

            <button
              className="btn btn-outline-danger w-100 mt-2"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
