import React, { useState } from 'react';
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import "./styles/Dashboard.css";

import ConnectionForm from '../components/ConnectionForm';
import CommandsSection from '../components/CommandsSection'; 
import LogsDisplay from '../components/LogsDisplay';

function SMPPClientPage() {
  const [logs, setLogs] = useState([]);

  const addLog = (log) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  };

  return (
    <div className="dashboard-container">
    <Sidebar />
    <div className="main-content">
      <Header />
    <div className="smpp-client-page">

      <div className="form-container">
        {/* Connection Form */}
        <div className="form-section">
          <ConnectionForm addLog={addLog} />
        </div>

        {/* Commands Section */}
        <div className="form-section">
          <CommandsSection />
        </div>

      
      </div>

      {/* Logs Display */}
      <LogsDisplay logs={logs} />
    </div>
    </div>
    </div>
  );
}

export default SMPPClientPage;
