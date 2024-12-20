import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css"; // Global styles
import SMPPClientPage from "./pages/SMPPClientPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SMPPClientPage />} />
      </Routes>
    </Router>
  );
}

export default App;
