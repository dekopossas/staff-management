// import { Link } from 'react-router-dom';
import styles from './styles.module.scss';


function FormsCreateEmployee() {
  return (
    <div className={styles.container}>
      <h1>Cadastrando Funcionario</h1>
      <form className={styles.register}>
        <div className={styles.fullBox}>
          <label htmlFor="name" >Nome do Funcionario:
          
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
          
            <input type="number" name="wage" id="wage" placeholder="Digite o Salário Bruto"/>
          </label>
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="discount" >Desconto na Previdencia:
          
            <input type="text" name="discount" id="discount" placeholder="Digite o Desconto na Previdencia"/>
          </label>
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="dependents" >Número de Dependentes:
          
            <input type="number" name="dependents" id="dependents" placeholder="Digite o Número de Dependentes"/>
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
