import React, { useState } from "react";
import "./SignInPage.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>
          SIGN IN TO<span className="inspired"> YOUR ACCOUNT</span>
        </h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>


      </form>

      <div className="footer">
        {/* <p className="footer-text">
          Don't have an account? <a href="#" className="highlight-purple">Sign Up</a>
        </p> */}
        
      </div>
      <button type="submit" className="btn">
          SIGN IN
        </button>
    </div>
    
  );
};

export default SignInPage;
