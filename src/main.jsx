import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      style={{
        textAlign: "center",
        marginTop: "15vh",
        fontWeight: "boldq",
      }}
    >
      Drum Machine
    </div>
    <App />
    <div style={{ textAlign: "center" }}>
      {" "}
      <small>Made by Gage Smith 2023.</small>
    </div>
  </React.StrictMode>
);
