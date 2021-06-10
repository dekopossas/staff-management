import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function NavSide() {
  return (
    <div className={styles.container}>
      <div className="sidenav">
        <ul className="nav-list">
          <div>
            <Link to="/" className={styles.liNav}>
              <li className="material-icons">home</li>
              Início
            </Link>
          </div>
          <div>
            <Link to="/create-employee" className={styles.liNav}>
              <li className="material-icons">storefront</li>
              Cadastro
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavSide;
