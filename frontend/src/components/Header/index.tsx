import React from 'react';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/logo.png" alt="logo" />

      <p>Staff CRUD Manager</p>

      <span>Qui, 8 abril</span>
    </header>
  );
}

export default Header;
