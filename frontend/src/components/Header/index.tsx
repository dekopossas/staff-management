import React from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/logo.png" alt="logo" />

      <p>Gerenciamento de Equipe</p>

      <span>{currentDate}</span>
    </header>
  );
}

export default Header;
