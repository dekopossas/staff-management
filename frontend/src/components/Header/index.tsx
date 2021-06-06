import React from 'react';
import styles from './styles.module.scss';

function Header() {
  return (
    <>
      <div className={styles.header}>
        <span>
          <img src="/logo.png" className={styles.logo} alt="logo" />
        </span>
        <span className={styles.title_group}>
          <i className="material-icons">home</i>
          Staff CRUD Manager
        </span>
      </div>
    </>
  );
}

export default Header;
