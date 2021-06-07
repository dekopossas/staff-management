import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from "../components/Header";
import NavSide from "../components/NavSide";
import '../styles/global.scss'
import Home from "./Home";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavSide />
      <Home />
    </BrowserRouter>
  );
}

export default App;
