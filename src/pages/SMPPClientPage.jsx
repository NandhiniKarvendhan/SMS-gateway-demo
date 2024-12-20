import React, { useState } from 'react';
import ConnectionForm from '../components/ConnectionForm';
import CommandsSection from '../components/CommandsSection'; 
import LogsDisplay from '../components/LogsDisplay';

function SMPPClientPage() {
  const [logs, setLogs] = useState([]);

  const addLog = (log) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  };

  return (
    <div className="smpp-client-page">
      <h1 className="page-title">SMPP Client</h1>

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
  );
}

export default SMPPClientPage;
