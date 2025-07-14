import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./HEADER.jsx";
import "./index.css";
import HeroSec from "./HeroSec.jsx";
import HeroSecRes from "./HeroSecRes.jsx";
import MainHero from "./MainHero.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
    <MainHero></MainHero>
    <App />
  </React.StrictMode>
);
