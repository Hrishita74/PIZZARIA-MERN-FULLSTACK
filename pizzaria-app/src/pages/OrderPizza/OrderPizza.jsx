import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./OrderPizza.scss";

export default function OrderPizza() {
  const [pizzas, setPizzas] = useState([]);
  const [extras, setExtras] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/pizzas")
      .then(res => setPizzas(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
  axios
    .get("http://localhost:3002/api/ingredients")
    .then(res => {
      console.log("INGREDIENTS RESPONSE:", res.data); // 👈 IMPORTANT
      setExtras(res.data);
    })
    .catch(err => console.error(err));
}, []);

  /* ================= HANDLERS ================= */

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setSelectedExtras([]);
    setShowModal(true);
  };

  const toggleExtra = (extra) => {
    setSelectedExtras(prev =>
      prev.some(e => e._id === extra._id)
        ? prev.filter(e => e._id !== extra._id)
        : [...prev, extra]
    );
  };

  const calculateTotal = () => {
    const extrasTotal = selectedExtras.reduce(
      (sum, e) => sum + e.price,
      0
    );
    return selectedPizza.price + extrasTotal;
  };

  const confirmAddToCart = () => {
    addToCart({
      name: selectedPizza.name,
      price: selectedPizza.price,
      quantity: 1,
      extras: selectedExtras,        // 🔥 IMPORTANT
      totalPrice: calculateTotal()   // 🔥 IMPORTANT
    });

    setShowModal(false);
    navigate("/cart");
  };

  /* ================= UI ================= */

  return (
    <div className="container mt-4 order-pizza">
      <h2><i>"Cravings Called.We Answered !"</i></h2>

      <div className="row">
        {pizzas.map(pizza => (
          <div className="col-md-4 mb-4" key={pizza._id}>
            <div className="card p-3 h-100 pizza-card">

              <img src={pizza.image} alt={pizza.name} />

              <h5 className="mt-3">{pizza.name}</h5>
              <p className="fw-semibold">₹{pizza.price}</p>

              <button
                className="btn btn-warning mt-auto"
                onClick={() => openModal(pizza)}
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {showModal && selectedPizza && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">
                  Customize {selectedPizza.name}
                </h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <div className="modal-body">
                <p>
                  <strong>Base Price:</strong> ₹{selectedPizza.price}
                </p>

                <h6>Add Extras</h6>
                <div className="row">
                  {extras.map(extra => (
                    <div className="col-md-6" key={extra._id}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selectedExtras.some(
                            e => e._id === extra._id
                          )}
                          onChange={() => toggleExtra(extra)}
                        />
                        <label className="form-check-label">
                          {extra.tname} (+₹{extra.price})
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <h6 className="me-auto">
                  Total: ₹{calculateTotal()}
                </h6>

                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-warning"
                  onClick={confirmAddToCart}
                >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
