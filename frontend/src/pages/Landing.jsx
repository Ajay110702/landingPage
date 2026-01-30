import { useAuth } from "../context/AuthContext";
import "../styles/Landing.css";
import { useState,useEffect } from "react";

const Landing = () => {
  const { user, logout } = useAuth();
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="landing">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome, {user?.name} 👋</h1>
        <p>Your modern React authentication starter app</p>

        <div className="cta-buttons">
          <button className="primary-btn">Get Started</button>
          
          <button
            className="secondary-btn"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>

          <button className="secondary-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose This App?</h2>
        <div className="feature-grid">
          <div className="card">🔐 Secure Authentication</div>
          <div className="card">⚡ Fast & Responsive</div>
          <div className="card">🧠 Clean Architecture</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 React Landing Page Project</p>
      </footer>
    </div>
  );
};

export default Landing;
