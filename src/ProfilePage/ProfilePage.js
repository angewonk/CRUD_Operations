import React, { useState } from "react";
import "./ProfilePage.css"; 
import blankImg from './blank.png'; 

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: 'Takano',
    lastName: 'Tetsuo',
    username: 'arriana23',
    email: 'takanotetsuo@gmail.com',
    profileImage: blankImg,
  });

  const [profileImage, setProfileImage] = useState(userDetails.profileImage);
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        profileImage: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Information:", userDetails);
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-header-area">
        <h1>User <span className="header-highlight">Profile</span></h1>
      </div>

      <div className="profile-content-area">
        <div className="profile-image-area">
          <img src={profileImage} alt="Profile" className="profile-image-display" />
        </div>

        <div className="profile-form-area">
          <form className="profile-form-container" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="First Name"
                value={userDetails.firstName}
                onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={userDetails.lastName}
                onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                value={userDetails.username}
                onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="profile-image-upload" className="image-upload-label">
                Change Profile Image
              </label>
              <input
                type="file"
                id="profile-image-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden-file-input"
              />
            </div>

            <button type="submit" className="update-profile-btn">
              UPDATE PROFILE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
