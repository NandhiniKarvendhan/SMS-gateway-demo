import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css"; // Global styles
import SMPPClientPage from "./pages/SMPPClientPage";
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/smpp-client" element={<SMPPClientPage />} />

      </Routes>
    </Router>
  );
}

export default App;
