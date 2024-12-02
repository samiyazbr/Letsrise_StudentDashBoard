import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';  // Tailwind CSS file
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);