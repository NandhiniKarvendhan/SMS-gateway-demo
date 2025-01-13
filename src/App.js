import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css"; // Global styles
import SMPPClientPage from "./pages/SMPPClientPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from './pages/Dashboard';
import DataPage from './pages/DataPage';
import SentSms from './pages/SentSmsPage.jsx';

import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<DataPage />} />

        <Route path="/smsc-management" element={<SMPPClientPage />} />
        <Route path="/send-sms" element={<SentSms/>} />
        <Route path="/send-viber" element={<h2>Send Viber Page</h2>} />
        <Route path="/phonebook" element={<h2>Phonebook Page</h2>} />
        <Route path="/user-management" element={<h2>User Management Page</h2>} />
        <Route path="/number-lookup" element={<h2>Number Lookup Page</h2>} />
        <Route path="/api-setup" element={<h2>API Setup Page</h2>} />
        <Route path="/subscription-links" element={<h2>Subscription Links Page</h2>} />
        <Route path="/admin" element={<h2>Admin Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
