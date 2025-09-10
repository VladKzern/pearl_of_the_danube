
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import './components/styles/reset.css'
import './components/styles/container.css'
import './index.css'
import App from './components/App/App'
import React from 'react';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
