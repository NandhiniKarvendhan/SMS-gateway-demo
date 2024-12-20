import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main App component

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Ensure the root element exists before rendering
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component inside React.StrictMode
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Ensure the HTML file has a <div id='root'></div>");
}
