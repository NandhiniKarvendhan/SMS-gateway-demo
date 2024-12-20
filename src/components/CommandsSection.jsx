import React, { useState } from "react";
import "./styles/CommandsSection.css";

const CommandsSection = () => {
  const [activeTab, setActiveTab] = useState("SubmitSM");
  const [sourceAddress, setSourceAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [message, setMessage] = useState("Hello world!");
  const [registeredDelivery, setRegisteredDelivery] = useState("1: MC Delivery Receipt");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = () => {
    alert(`Message sent:\nSource: ${sourceAddress}\nDestination: ${destinationAddress}\nMessage: ${message}`);
  };

  // Calculate message size dynamically
//   const messageSize = new Blob([message]).size; // Message size in bytes
  const smsCount = Math.ceil(message.length / 160); // Assuming 160 chars per SMS

  return (
    <div className="commands-section">
      <h2>Commands</h2>
      <div className="tabs">
        {["SubmitSM", "DataSM", "QuerySM", "CancelSM", "EnquireLink", "ReplaceSM", "SubmitMulti", "BroadcastSM", "BroadcastMulti"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="command-form">
        {activeTab === "SubmitSM" && (
          <>
            <div className="form-group toggle">
              <label>
                <input type="checkbox" />
                Show all (service type, ESM class, protocol ID, priority flag, data coding, etc)
              </label>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Source address</label>
                <div className="input-group">
                  <select>
                    <option>Intl</option>
                  </select>
                  <select>
                    <option>E164</option>
                  </select>
                  <input
                    type="text"
                    placeholder="source"
                    value={sourceAddress}
                    onChange={(e) => setSourceAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Destination address</label>
                <div className="input-group">
                  <select>
                    <option>Intl</option>
                  </select>
                  <select>
                    <option>E164</option>
                  </select>
                  <input
                    type="text"
                    placeholder="destination"
                    value={destinationAddress}
                    onChange={(e) => setDestinationAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Registered delivery</label>
                <select
                  value={registeredDelivery}
                  onChange={(e) => setRegisteredDelivery(e.target.value)}
                >
                  <option>1: MC Delivery Receipt</option>
                  <option>0: No Receipt</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="footer">
              <div className="sms-details">
                <div>{smsCount} SMS</div>
                {/* <div>{messageSize} bytes</div> */}
                <div>{message.length} chars</div>
                <div>GSM7 Character set (suggested)</div>
              </div>
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommandsSection;
