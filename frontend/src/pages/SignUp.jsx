import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    await fetch("https://react-auth-backend-07hg.onrender.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    
    navigate("/signin");
  };

  return (
    <div className="auth-page">
  <form className="auth-box" onSubmit={handleSubmit}>
    <h2>Register Here!</h2>

     <input 
     placeholder="Name"
      value={name} 
      onChange={(e) => setName(e.target.value)} required/>
   
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

    <p className="switch-auth">
     Already have an account?
     <span onClick={() => navigate("/signin")}> Sign In</span>
     </p>
      <button type="submit">Create Account</button>

   
    
  </form>
</div>
   
  );
};

export default SignUp;
