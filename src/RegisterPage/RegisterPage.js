import React, { useState } from "react";
import "./RegisterPage.css"; 
import blankImg from './blank.png'; 
import { Link } from "react-router-dom"; // Make sure to import Link

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(blankImg);
  
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleEmailChange = () => {
    setEmailError('');
    setConfirmEmailError('');
  };

  const handlePasswordChange = () => {
    setPasswordError('');
  };

  const isFormValid = () => {
    // Check if all fields are valid
    return (
      firstName && 
      lastName && 
      username && 
      email && 
      confirmEmail && 
      password && 
      confirmPassword && 
      !emailError && 
      !confirmEmailError && 
      !passwordError
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setEmailError("");
    setConfirmEmailError("");
    setPasswordError("");

    // Email validation
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Email match validation
    if (email !== confirmEmail) {
      setConfirmEmailError("Emails do not match.");
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("NOTE: Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long.");
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    // If no errors, log form data (for now)
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Confirm Email:", confirmEmail);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Profile Image:", profileImage);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>
          REGISTER AN<span className="header-highlight"> ACCOUNT</span>
        </h1>
      </div>

      <div className="page-content">
        <div className="page-left">
          <img src={profileImage} alt="Profile Preview" className="profile-image" />
        </div>

        <div className="page-right">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-set">
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="input-set">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-set">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleEmailChange();
                }}
                required
              />
              {emailError && <span className="error">{emailError}</span>}
            </div>

            <div className="input-set">
              <input
                type="email"
                id="confirm-email"
                placeholder="Confirm Email Address"
                value={confirmEmail}
                onChange={(e) => {
                  setConfirmEmail(e.target.value);
                  handleEmailChange();
                }}
                required
              />
              {confirmEmailError && <span className="error">{confirmEmailError}</span>}
            </div>

            <div className="input-set">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handlePasswordChange();
                }}
                required
              />
            </div>

            <div className="input-set">
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  handlePasswordChange();
                }}
                required
              />
              {passwordError && (
                <>
                  <span className="error">{passwordError}</span>
                  <br />
                </>
              )}
            </div>

            <div className="input-set">
              <label htmlFor="profile-image-upload" className="upload-label">
                Choose Profile Image
              </label>
              <input
                type="file"
                id="profile-image-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="upload-input"
              />
            </div>

            {/* Changed Link to navigate to /profile */}
                    <Link 
          to="/profile" 
          className="submit-btn" 
          style={{ pointerEvents: isFormValid() ? 'auto' : 'none', opacity: isFormValid() ? 1 : 0.5 }} >
          SIGN UP
        </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
