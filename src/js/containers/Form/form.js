import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./Login.scss";

const MedBookLogin = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ 
    username: "", 
    email: "", 
    password: "" 
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      localStorage.setItem("token", "dummyToken123");
      navigate("/book");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.loginWrapper}>
      <div className={css.loginContainer}>
        {/* Sign Up */}
        <div className={`${css.formContainer} ${css.signupForm} ${isSignup ? css.showForm : ""}`}>
          <h1>Create Your Account</h1>
          {error && <div className={css.errorMessage}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
              className={error ? css.error : ""}
            />
            <input
              type="email"
              name="email"
              placeholder="Medical Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={error ? css.error : ""}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className={error ? css.error : ""}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : "Sign Up"}
            </button>
          </form>
        </div>

        {/* Login */}
        <div className={`${css.formContainer} ${css.loginForm} ${!isSignup ? css.showForm : ""}`}>
          <h1>Welcome to MedBook</h1>
          {error && <div className={css.errorMessage}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className={error ? css.error : ""}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className={error ? css.error : ""}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : "Login"}
            </button>
          </form>
        </div>

        {/* Overlay Panel */}
        <div className={`${css.overlayPanel} ${isSignup ? css.moveLeft : ""}`}>
          <div className={css.overlayContent}>
            {isSignup ? (
              <>
                <h1>Welcome Back!</h1>
                <p>Already have a MedBook account? Log in to continue.</p>
                <button onClick={() => setIsSignup(false)}>Log In</button>
              </>
            ) : (
              <>
                <h1>New to MedBook?</h1>
                <p>Create your account to book appointments with top providers</p>
                <button onClick={() => setIsSignup(true)}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedBookLogin;