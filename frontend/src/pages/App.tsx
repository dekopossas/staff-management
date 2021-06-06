import React from "react";
import Header from "../components/Header";
import NavSide from "../components/NavSide";
import '../styles/global.scss'
import Home from "./Home";

function App() {
  return (
    <div>
      <Header />
      <NavSide />
      <Home />
    </div>
  );
}

export default App;
