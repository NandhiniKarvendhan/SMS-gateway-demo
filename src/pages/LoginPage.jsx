import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Here you can add authentication logic
    if (email && password) {
      // Navigate to SMPP Client page if credentials are valid
      navigate("/smpp-client");
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          {/* Replace with your image or add styles to handle the left image */}
        </div>
        <div className="login-form">
          <h1 className="login-title">Log in</h1>
          <p className="welcome-message">Welcome back!</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className="input-narrow"
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
              />
            </div>
            <div>
              <input type="checkbox" id="stay-signed-in" />
              <label htmlFor="stay-signed-in">Stay signed in</label>
            </div>
            <button type="submit" className="login-button">Log in</button>
          </form>
          <div className="extra-links">
            <a href="/reset" className="reset-link">Forgot your password? Reset</a>
            <div className="separator">or</div>
            <button className="google-login">Sign in with Google</button>
            <a href="/signup" className="signup-link">Don’t have an account? Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
