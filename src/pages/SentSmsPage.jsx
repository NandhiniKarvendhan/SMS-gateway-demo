import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import "./styles/SentSms.css";

const SentSms = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const destinations = formData.to.split(",").map((number) => number.trim());

    const payload = {
      ipAddress: "127.0.0.1",
      port: 3456,
      systemId: "civicsense",
      password: "Ci@1224",
      bindOption: "TR",
      shortMessage: formData.message,
      sender: formData.from,
      destinations: destinations,
    };

    try {
      const response = await fetch("http://209.74.72.101:9090/testsms/smsc/sendsms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const responseData = await response.json();
        alert("Message sent successfully!");
        console.log(responseData);

        setFormData({
          from: "",
          to: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
        console.error(await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

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
          <form className="send-sms-form" onSubmit={handleSubmit}>
            <div className="form-group row">
              <label htmlFor="from" className="form-label">From</label>
              <input
                type="text"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
                placeholder="Enter sender name"
                className="form-control"
              />
            </div>
            <div className="form-group row">
              <label htmlFor="to" className="form-label">To</label>
              <input
                type="text"
                id="to"
                name="to"
                value={formData.to}
                onChange={handleChange}
                placeholder="Type numbers, separated by commas"
                className="form-control"
              />
              <button type="button" className="insert-group-button">Insert group</button>
            </div>
            <div className="form-group row">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here"
                className="form-control"
                rows="4"
              ></textarea>
            </div>
            <div className="form-group row">
              <label className="form-label check-box">
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
