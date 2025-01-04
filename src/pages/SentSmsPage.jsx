import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import "./styles/Dashboard.css";

const SentSms = () => {
    return (
      <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
      </div>
      </div>
    );
  };
  
  export default SentSms;