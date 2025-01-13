import React, { useState } from 'react';

function ConnectionForm({ addLog }) {
  const [host, setHost] = useState('eu-uk.mlsmpp.net');
  const [port, setPort] = useState('2775');
  const [systemId, setSystemId] = useState('');
  const [password, setPassword] = useState('');
  const [systemType, setSystemType] = useState('SMPP');
  // const [version, setVersion] = useState('v3.4 (0x34)');
  const [status, setStatus] = useState('Unbound');
  const [isDisconnectEnabled, setIsDisconnectEnabled] = useState(false);

  const handleConnect = () => {
    setStatus('Bound');
    setIsDisconnectEnabled(true);
    addLog(`Connected to ${host}:${port} with System ID: ${systemId}`);
  };

  const handleDisconnect = () => {
    setStatus('Unbound');
    setIsDisconnectEnabled(false);
    addLog('Disconnected.');
  };

  return (
    <div className="connection-form">
      <h2>Account</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Host</label>
          <input
            type="text"
            value={host}
            onChange={(e) => setHost(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Port</label>
          <input
            type="number"
            value={port}
            onChange={(e) => setPort(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>System ID</label>
          <input
            type="text"
            value={systemId}
            onChange={(e) => setSystemId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>System Type</label>
          <input
            type="text"
            value={systemType}
            onChange={(e) => setSystemType(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <label>Version</label>
          <select
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          >
            <option>v3.4 (0x34)</option>
            <option>v5.0 (0x50)</option>
          </select>
        </div> */}
      </div>
      <div className="button-group">
        <button className="btn connect" onClick={handleConnect}>
          Test Connection
        </button>
        <button className="btn tx-only">TX-only</button>
        <button className="btn rx-only">RX-only</button>
        <button
          className="btn disconnect"
          onClick={handleDisconnect}
          disabled={!isDisconnectEnabled}
        >
          Disconnect
        </button>
      </div>
      <div className="status">
        <span>
          Status: <span className={`status-indicator ${status.toLowerCase()}`} />
        </span>
        {status}
      </div>
    </div>
  );
}

export default ConnectionForm;
