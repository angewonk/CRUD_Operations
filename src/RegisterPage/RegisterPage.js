import React, { useState } from "react";
import "./RegisterPage.css"; 
import blankImg from './blank.png'; 

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(blankImg); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-set">
              <input
                type="email"
                id="confirm-email"
                placeholder="Confirm Email Address"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-set">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-set">
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
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

            <button type="submit" className="submit-btn">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
