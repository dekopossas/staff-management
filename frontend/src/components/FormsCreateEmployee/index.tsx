// import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function FormsCreateEmployee() {
  return (
    <div className={styles.container}>
      <h1>Cadastrando Funcionario</h1>
      <form className={styles.register}>
        <div className={styles.fullBox}>
          <label htmlFor="name">Nome do Funcionário:</label>
          <input type="text" name="name" id="name" placeholder="Digite o nome" />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="name">CPF:</label>
          <input type="text" name="cpf" id="cpf" placeholder="Digite o cpf" />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="wage">Salário Bruto:</label>
          <input type="number" name="wage" id="wage" placeholder="Salário Bruto" />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="discount">Desconto na Previdência:</label>
          <input type="text" name="discount" id="discount" placeholder="Desconto na Previdência" />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="dependents">Número de Dependentes:</label>
          <input
            type="number"
            name="dependents"
            id="dependents"
            placeholder="Número de Dependentes"
          />
        </div>
        <div className={styles.halfBox}>
          <input type="submit" value="registrar" id="btn-submit" />
        </div>
      </form>
    </div>
  );
}

export default FormsCreateEmployee;
