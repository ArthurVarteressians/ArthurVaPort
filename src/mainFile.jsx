import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./App2"; // Importing second 3D model
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Comment out `App` if you want to show `App2`: */}
    {/* <App />  First 3D model */}
    <App2 /> {/* Render the second 3D model */}
  </React.StrictMode>
);
