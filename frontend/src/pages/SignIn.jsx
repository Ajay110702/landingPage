import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Auth.css";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://react-auth-backend-07hg.onrender.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    login(data, remember);
    navigate("/");
  };

  return (
    <div className="auth-page">
  <form className="auth-box" onSubmit={handleSubmit}>
    <h2>Sign In</h2>
    <p className="auth-text">Welcome back! Please login</p>

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <div className="auth-row">
      <label className="remember">
        <input type="checkbox" />
        <span>Remember me</span>
      </label>
      <span className="link">Forgot?</span>
    </div>

    <button type="submit">Sign In</button>

    <p className="switch-auth">
      Don't have an account?
      <span onClick={() => navigate("/signup")}> Sign Up</span>
    </p>
  </form>
</div>

  );
};

export default SignIn;
