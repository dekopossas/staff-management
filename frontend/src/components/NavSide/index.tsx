import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function NavSide() {
  return (
    <div className={styles.container}>
      <div className="sidenav">
        <ul className="nav-list">
          <Link to="/" className="menu-bars">
            <li className="material-icons">home</li>
            Início
          </Link>
          <Link to="/create-employee" className="menu-bars">
            <li className="material-icons">storefront</li>
            Cadastro
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavSide;
