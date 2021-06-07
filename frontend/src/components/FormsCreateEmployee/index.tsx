// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';

type Profile = {
  fullName: string;
  cpf: number;
  wage: number;
  discount: string;
  dependents: number;
};

function FormsCreateEmployee() {
  const { register, handleSubmit, errors } = useForm<Profile>();

  const onSubmit = handleSubmit((data: Profile) => {
    alert(JSON.stringify(data));
  });

  return (
    <div className={styles.container}>
      <h1>Cadastrando Funcionario</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.fullBox}>
          <label htmlFor="fullName">Nome do Funcionário:</label>
          <input
            ref={register({ required: true })}
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Digite o nome"
          />
          {errors.fullName && <div className={styles.errorValidation}>Digite o nome</div>}
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="cpf">CPF:</label>
          <input
            ref={register({ required: true })}
            type="number"
            name="cpf"
            id="cpf"
            placeholder="Digite o cpf"
          />
          {errors.cpf && <div className={styles.errorValidation}>Digite o cpf</div>}
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="wage">Salário Bruto:</label>
          <input
            ref={register({ required: true })}
            type="number"
            name="wage"
            id="wage"
            placeholder="Salário Bruto"
          />
          {errors.wage && <div className={styles.errorValidation}>Digite o Salário</div>}
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="discount">Desconto na Previdência:</label>
          <input
            ref={register({ required: true })}
            id="discount"
            type="text"
            name="discount"
            placeholder="Desconto na Previdência"
          />
          {errors.discount && <div className={styles.errorValidation}>Digite o desconto</div>}
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="dependents">Número de Dependentes:</label>
          <input
            ref={register({ required: true })}
            id="dependents"
            type="number"
            name="dependents"
            placeholder="Número de Dependentes"
          />
          {errors.dependents && <div className={styles.errorValidation}>Preencha o número</div>}
        </div>
        <div className={styles.halfBox}>
          <input type="submit" value="registrar" id="btn-submit" />
        </div>
      </form>
    </div>
  );
}

export default FormsCreateEmployee;
