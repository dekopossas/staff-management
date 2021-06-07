import React from 'react';

import styles from './styles.module.scss';

function NavSide() {
  return (
    <div className={styles.container}>
      <div className="sidenav" >
        <ul className="nav-list">
            <li className="material-icons">home</li>
            Início

            <li className="material-icons">storefront</li>
            Cadastro
        </ul>
      </div>
    </div>
  );
}

export default NavSide;
