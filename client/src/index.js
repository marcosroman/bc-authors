import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "components"),
    },
  },
};
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

