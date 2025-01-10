import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./App2"; // Importing second 3D model
import "./index.css";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>
);
