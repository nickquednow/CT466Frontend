import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have some global styles
import App from './App'; // Adjust the path if your App component is located elsewhere

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
