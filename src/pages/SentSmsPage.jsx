import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import "./styles/SentSms.css";

const SentSms = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="send-sms-container">
          <div className="tab-container">
            <div className="tab active-tab">Send Message</div>
            <div className="tab">Scheduled Messages</div>
          </div>
          <form className="send-sms-form">
            <div className="form-group">
              <label htmlFor="from" className="form-label">From</label>
              <select id="from" name="from" className="form-control">
                <option value="Messente">Messente</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="to" className="form-label">To</label>
              <input
                type="text"
                id="to"
                name="to"
                placeholder="Type a number, contact or group name"
                className="form-control"
              />
              <button type="button" className="insert-group-button">Insert group</button>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hello! Welcome to Messente. Use templates to make sending messages more efficient."
                className="form-control"
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">
                <input type="checkbox" />
                Replace characters with Unicode
              </label>
            </div>
            <div className="form-actions">
              <button type="button" className="btn btn-preview">Preview</button>
              <button type="submit" className="btn btn-send">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SentSms;
