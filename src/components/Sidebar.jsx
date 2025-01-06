import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiMessageSquare, FiUsers, FiBook, FiSettings, FiDatabase, FiGlobe,  FiUserCheck } from "react-icons/fi";
import logo from "../assets/images/demo_logo.jpg";
import profile from "../assets/images/profile-picture.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className="sidebar">
      <div className="logo"><img src={logo} alt="logo"/></div>
      <ul>
        <li onClick={() => handleNavigation("/dashboard")}>
          <FiHome /> Dashboard
        </li>
        <li onClick={() => handleNavigation("/send-sms")}>
          <FiMessageSquare /> Send SMS
        </li>
       
        <li onClick={() => handleNavigation("/phonebook")}>
          <FiBook /> Phonebook
        </li>
        <li onClick={() => handleNavigation("/user-management")}>
          <FiUsers /> User Management
        </li>
        <li onClick={() => handleNavigation("/number-lookup")}>
          <FiUserCheck /> Number lookup
        </li>
        <li onClick={() => handleNavigation("/api-setup")}>
          <FiDatabase /> API setup
        </li>
        <li onClick={() => handleNavigation("/subscription-links")}>
          <FiGlobe /> Subscription links
        </li>
        <li onClick={() => handleNavigation("/sms-management")}>
          <FiSettings /> SMS Management
        </li>
      </ul>

      {/* Contact Section */}
      <div className="contact-section">
        <img
          src={profile}
          alt="User Avatar"
          className="contact-avatar"
        />
        <div className="contact-info">
          <strong>Melvin Ramasamy</strong>
          <p>Head of Revenue</p>
          <a href="mailto:revenue.head@multichat.com">
          revenue.head@multichat.com
          </a>
        </div>
        <button className="contact-button">Book a call</button>
      </div>
      <div className="footer">All systems operational</div>
    </aside>
  );
};

export default Sidebar;
