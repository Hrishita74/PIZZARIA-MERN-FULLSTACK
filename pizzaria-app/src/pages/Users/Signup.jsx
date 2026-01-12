import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.scss";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username || !password) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:3004/api/users/signup", {
        username,
        password,
      });

      alert("Signup successful");
      navigate("/login");
    } catch {
      alert("User already exists");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h3>Signup</h3>

        <div className="auth-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-warning auth-btn" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
