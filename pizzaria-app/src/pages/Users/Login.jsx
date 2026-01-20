import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Auth.scss";
import { Link } from "react-router-dom";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const isValidUsername = (username) => {
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(username);
  };
  const handleLogin = async () => {
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
      await axios.post("http://localhost:3004/api/users/login", {
        username,
        password,
      });

      login(username);
      alert("Login successful");
      navigate("/order");
    } catch {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h3>Login</h3>

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

        <button className="btn btn-warning auth-btn" onClick={handleLogin}>
          Login
        </button>
        <p className="text-center mt-2">
          New user? <Link to="/signup">Sign up</Link>
        </p>

      </div>
    </div>
  );
}
