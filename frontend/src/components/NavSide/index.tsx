import React from 'react';

import styles from './styles.module.scss';

function NavSide() {
  return (
    <div className="container">
      <div className="sidenav" >
        <div className="nav-list">
            <i className="material-icons">home</i>
            Início

            <i className="material-icons">storefront</i>
            Cadastro
        </div>
      </div>
    </div>
  );
}

export default NavSide;
