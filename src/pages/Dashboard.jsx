import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import "./styles/Dashboard.css";
import { FiCheckCircle, FiMail, FiAlertCircle } from "react-icons/fi";
import { AiOutlineWarning, AiOutlineStop } from "react-icons/ai";
import Chart from "../components/Chart.jsx";
import DataPage  from "./DataPage.jsx";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Statistics");

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Outgoing SMS",
        data: [3000, 5000, 4000, 7000, 6000, 9000, 8000],
        borderColor: "#FF9800",
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        tension: 0.4,
      },
      {
        label: "Incoming SMS",
        data: [1000, 2000, 3000, 4000, 3000, 2000, 1000],
        borderColor: "rgb(69, 110, 233",
        backgroundColor: "rgba(69, 110, 233, 0.2)",
        tension: 0.4,
      },   {
        label: "Viber",
        data: [0, 20, 45, 400, 300, 500, 200],
        borderColor: "rgb(184, 109, 207)",
        backgroundColor: "rgba(184, 109, 207,0.2)",
        tension: 0.4,
      },
      {
        label: "WhatsApp",
        data: [200, 250, 345, 400, 600, 800, 1000],
        borderColor: "rgb(85, 205, 119)",
        backgroundColor: "rgba(85, 205, 119,0.2)",
        tension: 0.4,
      },

    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Statistics":
        return (
          <div className="stats-section">
            <div className="card">
              <h2>2,747,041 Messages Processed</h2>
              <p>By Status</p>
              <div className="status">
                <div>
                  <FiCheckCircle color="green" /> Delivered: 2.7M
                </div>
                <div>
                  <FiMail color="blue" /> Sent: 12.2K
                </div>
                <div>
                  <FiAlertCircle color="red" /> Failed: 2.5K
                </div>
              </div>
            </div>
            <div className="card">
              <h2>210,601 Messages Rejected</h2>
              <p>Reason</p>
              <ul>
                <li>
                  <AiOutlineWarning color="orange" /> No Viber/WhatsApp:
                  168,357
                </li>
                <li>
                  <AiOutlineStop color="red" /> Invalid/Blocked: 39,805
                </li>
              </ul>
            </div>
          </div>
        );
      case "History":
        return (
          <div className="history-section">
            <h2>Message History</h2>
            <DataPage/>
          </div>
        );
      case "Campaigns":
        return (
          <div className="campaigns-section">
            <h2>Campaigns</h2>
            <p>Display campaigns content here...</p>
          </div>
        );
      case "Export History":
        return (
          <div className="export-history-section">
            <h2>Export History</h2>
            <p>Display export history content here...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <div className="tabs">
            {["Statistics", "History", "Campaigns", "Export History"].map(
              (tab) => (
                <span
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </span>
              )
            )}
          </div>
          {renderContent()}
          {activeTab === "Statistics" && (
            <div className="chart-section">
              <h2>By Message Type</h2>
              <Chart data={chartData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
