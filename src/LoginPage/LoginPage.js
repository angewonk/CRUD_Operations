import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./LoginPage.css"; // Make sure to create this CSS file in the same folder

const LoginPage = () => {
  return (
    
    <div className="container">
      <div className="nav"></div>
      <div className="header">
        <h1>
          WELCOME TO <span className="inspired">INSPIRED</span>
        </h1>
        <p className="tagline">
          WHERE YOUR HOPES AND DREAMS COME{" "}
          <span className="highlight-purple">TRUE</span>
        </p>
      </div>

      <br />
      <div className="options">
        <div className="option">
          <h2>YOU ALREADY HAVE AN ACCOUNT?</h2>
          <Link to="/signin" className="btn">
            SIGN IN
          </Link>
        </div>
        <div className="divider"></div>
        <div className="option">
          <h2>YOU WANT TO CREATE AN ACCOUNT?</h2>
          <Link to="/register" className="btn">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
