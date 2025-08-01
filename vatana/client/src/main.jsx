import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Make sure this exists or remove if not needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
