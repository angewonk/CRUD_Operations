import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import LoginPage from "./LoginPage/LoginPage";
import SignInPage from "./SignInPage/SignInPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import AdminPage from "./Admin/AdminPage";
import ProfilePage from "./ProfilePage/ProfilePage";

function App() {
  return (
    <Router>
      {/* Navbar is rendered once at the top, so it stays on every page */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
