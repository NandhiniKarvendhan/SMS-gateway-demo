import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/LoginPage.css";
import { auth } from "../config/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Please enter valid credentials!");
      return;
    }
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://login-backend-3rwp.onrender.com";

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/google-signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        const errorData = await response.text(); // Log raw response to debug
        console.error("Error Response:", errorData);
        throw new Error("Google Sign-In failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In error:", error);
      alert("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image"></div>
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
            <Link to="/reset" className="reset-link">Forgot your password? Reset</Link>
            <div className="separator">or</div>
            <button className="google-login" onClick={handleGoogleSignIn}>
              Sign in with Google
            </button>
            <Link to="/signup" className="signup-link">Don’t have an account? Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
