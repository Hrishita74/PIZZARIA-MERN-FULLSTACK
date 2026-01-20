import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.scss";
import { Link } from "react-router-dom";


export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isValidUsername = (username) => {
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(username);
  };

  const handleSignup = async () => {
    if (!username || !password) {
      alert("Fields cannot be empty");
      return;
    }

    if (username.includes(" ")) {
      alert("Username cannot contain spaces");
      return;
    }

    if (!isValidUsername(username)) {
      alert("Username can contain only letters, numbers and _");
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
        <p className="text-center mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}
