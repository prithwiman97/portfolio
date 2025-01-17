import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = container ? ReactDOM.createRoot(container) : null;
root?.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
