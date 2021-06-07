// import React, { useEffect, useState } from "react";
import FormsCreateEmployee from "../../components/FormsCreateEmployee";
import Header from "../../components/Header";
import NavSide from "../../components/NavSide";
import styles from './styles.module.scss';
import './style.css';


function CreateEmployee() {
  return (
    <>
      <Header />
      <div className="container">
        <NavSide />
        <FormsCreateEmployee />
      </div>
    </>
  );
}

export default CreateEmployee;
