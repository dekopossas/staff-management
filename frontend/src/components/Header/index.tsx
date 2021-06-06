import React from 'react';
import './styles.module.scss';

function Header() {
  return (
    <>
      <div className="header">
        <span>
          <img className="logo" alt="logo" />
        </span>
        <span className="title-group">
          <i className="material-icons">home</i>
          Aplicação CRUD
        </span>
      </div>
    </>
  );
}

export default Header;
