import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./HEADER.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
    <App />
  </React.StrictMode>
);
