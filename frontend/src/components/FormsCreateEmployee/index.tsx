// import { Link } from 'react-router-dom';
import styles from './styles.module.scss';


function FormsCreateEmployee() {
  return (
    <div className={styles.container}>
      <h1>Cadastrando Funcionario</h1>
      <form className={styles.register}>
        <div className={styles.fullBox}>
          <label htmlFor="name" >Nome do Funcionário:
          
            <input type="text" name="name" id="name" placeholder="Digite o nome"/>
          </label>
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="name" >CPF:
          
            <input type="text" name="cpf" id="cpf" placeholder="Digite o cpf"/>
          </label>
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="wage" >Salário Bruto:
          
            <input type="number" name="wage" id="wage" placeholder="Salário Bruto"/>
          </label>
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="discount" >Desconto na Previdência:
          
            <input type="text" name="discount" id="discount" placeholder="Desconto na Previdência"/>
          </label>
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="dependents" >Número de Dependentes:
          
            <input type="number" name="dependents" id="dependents" placeholder="Número de Dependentes"/>
          </label>
        </div>
        <div className={styles.halfBox}>
            <input type="submit" value="registrar" id="btn-submit" />
        </div>       
      </form>
    </div>
  );
}

export default FormsCreateEmployee;
