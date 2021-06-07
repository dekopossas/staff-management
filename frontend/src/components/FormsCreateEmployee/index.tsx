// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';

type Profile = {
  fullName: string;
  cpf: number;
  

}

function FormsCreateEmployee() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={styles.container}>
      <h1>Cadastrando Funcionario</h1>
      <form className={styles.formRegister}>
        <div className={styles.fullBox}>
          <label htmlFor="fullName">Nome do Funcionário:</label>
          <input ref={register} type="text" name="fullName" id="fullName" placeholder="Digite o nome" />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="cpf">CPF:</label>
          <input ref={register} type="text" name="cpf" id="cpf" placeholder="Digite o cpf" />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="wage">Salário Bruto:</label>
          <input ref={register} type="number" name="wage" id="wage" placeholder="Salário Bruto" />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="discount">Desconto na Previdência:</label>
          <input
            ref={register}
            id="discount"
            type="text"
            name="discount"
            placeholder="Desconto na Previdência"
          />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="dependents">Número de Dependentes:</label>
          <input
            ref={register}
            id="dependents"
            type="number"
            name="dependents"
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
