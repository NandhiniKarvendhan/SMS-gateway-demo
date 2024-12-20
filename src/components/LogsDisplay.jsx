import React from "react";
import "./styles/LogsDisplay.css";

function LogsDisplay({ logs, onClear, onCompact, onExpand, onTop }) {
  return (
    <div className="logs-display">
      <h2 className="logs-title">Log</h2>
      <div className="logs-table">
        <div className="logs-header">
          <span>Time | Direction</span>
          <span>SMPP PDU</span>
          <span>SMPP Body (hex)</span>
        </div>
        <div className="logs-content">
          {logs.length === 0 ? (
            <div className="logs-empty">No logs to display</div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="logs-row">
                <span>{log.timeDirection}</span>
                <span>{log.pdu}</span>
                <span>{log.bodyHex}</span>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="logs-actions">
        <button onClick={onTop} className="logs-btn">Top</button>
        <button onClick={onCompact} className="logs-btn">Compact</button>
        <button onClick={onExpand} className="logs-btn">Expand</button>
        <button onClick={onClear} className="logs-btn">Clear</button>
      </div>
    </div>
  );
}

export default LogsDisplay;
