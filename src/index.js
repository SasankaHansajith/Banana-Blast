import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Make sure you're targeting the correct DOM element with id="root"
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
