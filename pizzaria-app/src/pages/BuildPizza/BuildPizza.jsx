import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./BuildPizza.scss";
import { useAuth } from "../../context/AuthContext";


const BASE_PRICE = 200;

export default function BuildPizza() {
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, username } = useAuth();


  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/ingredients")
      .then(res => setIngredients(res.data))
      .catch(err => console.error(err));
  }, []);

  const toggleIngredient = (item) => {
    if (selected.find(i => i._id === item._id)) {
      setSelected(selected.filter(i => i._id !== item._id));
    } else {
      setSelected([...selected, item]);
    }
  };

  const extrasTotal = selected.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const finalTotal = BASE_PRICE + extrasTotal;

  const pizzaName = isLoggedIn
  ? `${username}'s Delicious Treat`
  : "Custom Pizza";


  const confirmAddToCart = () => {
    addToCart({
  name: pizzaName,
  price: BASE_PRICE,
  quantity: 1,
  extras: selected,
  totalPrice: finalTotal
});


    setShowModal(false);
    navigate("/cart");
  };

  return (
    <div className="container mt-4 build-pizza">
      <h2>Build Your Pizza</h2>

      {/* INGREDIENT */}
      <div className="ingredient-grid">
        {ingredients.map(item => (
          <div className="ingredient-card" key={item._id}>
            <img src={item.image} alt={item.tname} />
            <p className="name">{item.tname}</p>
            <p className="price">₹{item.price}</p>
            <input
              type="checkbox"
              checked={!!selected.find(i => i._id === item._id)}
              onChange={() => toggleIngredient(item)}
            />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
  <button
    className="btn btn-warning border border-danger"
    disabled={selected.length === 0}
    onClick={() => setShowModal(true)}
  >
    Build Ur Pizza
  </button>
</div>


      {/*CUSTOMISE POP-UP*/}
      {showModal && (
        <div className="modal fade show d-block">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Custom Pizza</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <div className="modal-body">
                <p><strong>Base Price:</strong> ₹{BASE_PRICE}</p>

                <h6>Selected Ingredients</h6>
                <ul>
                  {selected.map(item => (
                    <li key={item._id}>
                      {item.tname} (+₹{item.price})
                    </li>
                  ))}
                </ul>

                <hr />
                <h6>Total: ₹{finalTotal}</h6>
              </div>

              <div className="modal-footer">
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
