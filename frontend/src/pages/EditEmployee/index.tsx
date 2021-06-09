// import React, { useEffect, useState } from "react";
import FormsEditEmployee from "../../components/FormsEditEmployee";
import Header from "../../components/Header";
import NavSide from "../../components/NavSide";
// import styles from './styles.module.scss';
import './style.css';


function EditEmployee() {
  return (
    <>
      <Header />
      <div className="container">
        <NavSide />
        <FormsEditEmployee />
      </div>
    </>
  );
}

export default EditEmployee;
