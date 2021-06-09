// import React, { useEffect, useState } from "react";
import FormsEmployee from "../../components/FormsEmployee";
import Header from "../../components/Header";
import NavSide from "../../components/NavSide";
// import styles from './styles.module.scss';
import './style.css';


function CreateEmployee() {
  return (
    <>
      <Header />
      <div className="container">
        <NavSide />
        <FormsEmployee />
      </div>
    </>
  );
}

export default CreateEmployee;
