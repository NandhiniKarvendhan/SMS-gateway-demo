import React from "react";
import { FiHelpCircle, FiPlusCircle, FiBell } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/send-sms": "Send SMS",
    "/send-viber": "Send Viber",
    "/phonebook": "Phonebook",
    "/senders": "Senders",
    "/number-lookup": "Number Lookup",
    "/api-setup": "API Setup",
    "/subscription-links": "Subscription Links",
    "/admin": "Admin",
  };

  const pageTitle = pageTitles[location.pathname] || "Messente";

  return (
    <header className="header">
      <div className="page-title">
        <h2>{pageTitle}</h2>
      </div>
      <div className="balance-actions">
        <div className="balance">
          <span>Balance: €3.14</span>
          <button>
            <FiPlusCircle /> Add credit
          </button>
        </div>
        <div className="actions">
          <FiBell style={{ marginRight: "1rem" }} />
          <FiHelpCircle /> Help
          <div className="user-info">
            <span>M</span> Demo
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
