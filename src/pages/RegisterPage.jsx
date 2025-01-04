import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://login-backend-3rwp.onrender.com";
  
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.email, 
          password: formData.password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message); 
        navigate("/dashboard"); 
      } else {
        setError(data.message || "Failed to register. Please try again.");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="login-page register">
      <div className="login-container">
        <div className="login-image"></div>
        <div className="login-form register">
          <h1 className="login-title register">Sign Up</h1>
          <p className="welcome-message">Welcome!</p>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className="input-narrow"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="input-narrow"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button register">
              Sign Up
            </button>
          </form>
          <div className="extra-links">
            <a href="/" className="signup-link register">
              Already have an account? Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
