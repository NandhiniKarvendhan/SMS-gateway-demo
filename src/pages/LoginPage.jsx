import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/LoginPage.css";
import { auth } from "../config/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Please enter valid credentials!");
      return;
    }

    setIsLoading(true); 

    try {
      const response = await fetch(`http://localhost:9090/user/signin`, {
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
    } finally {
      setIsLoading(false); 
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    setIsLoading(true); 
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
        throw new Error("Google Sign-In failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In error:", error);
      alert("Google Sign-In failed. Please try again.");
    } finally {
      setIsLoading(false); 
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
                required
              />
            </div>
            <div>
              <input type="checkbox" id="stay-signed-in" />
              <label htmlFor="stay-signed-in">Stay signed in</label>
            </div>
            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>

          {isLoading && (
            <div className="loading-indicator">
              <div className="spinner"></div>
              <p>Logging you in, please wait...</p>
            </div>
          )}

          <div className="extra-links">
            <Link to="/reset" className="reset-link">
              Forgot your password? Reset
            </Link>
            <div className="separator">or</div>
            <button
              className="google-login"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in with Google"}
            </button>
            <Link to="/signup" className="signup-link">
              Don’t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
