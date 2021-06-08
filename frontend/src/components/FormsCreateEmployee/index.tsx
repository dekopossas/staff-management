import { useHistory } from 'react-router-dom';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import api from '../../services/api';

type Profile = {
  fullName: string;
  cpf: string;
  wage: number;
  discount: string;
  dependents: number;
};

function FormsCreateEmployee() {
  const { register, handleSubmit } = useForm<Profile>();

  const history = useHistory();

  // const validateSubmit = () => {
  //   if()
  // }

  const onSubmit = handleSubmit(async (data: Profile) => {
    const jsonData = data;

    const response = await api.post('/employees', jsonData);

    if (response.status === 201) {
      history.push('/');
    } else {
      alert('Erro ao cadastrar o usuário');
    }
  });

  return (
    <div className={styles.container}>
      <h1>Cadastrando Funcionario</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.fullBox}>
          <label htmlFor="fullName">Nome do Funcionário:</label>
          <input
            {...register('fullName')}
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Digite o nome"
          />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="cpf">CPF:</label>
          <input {...register('cpf')} type="text" name="cpf" id="cpf" placeholder="Digite o cpf" />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="wage">Salário Bruto:</label>
          <input
            {...register('wage')}
            type="number"
            name="wage"
            id="wage"
            placeholder="Salário Bruto"
          />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="discount">Desconto na Previdência:</label>
          <input
            {...register('discount')}
            id="discount"
            type="text"
            name="discount"
            placeholder="Desconto na Previdência"
          />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="dependents">Número de Dependentes:</label>
          <input
            {...register('dependents')}
            id="dependents"
            type="number"
            name="dependents"
            placeholder="Número de Dependentes"
          />
        </div>
        <div className={styles.halfBox}>
          <input
            type="submit"
            value="registrar"
            id="btn-submit"
            // disabled={!(isEmailValid && isPasswordValid)}
          />
        </div>
      </form>
    </div>
  );
}

export default FormsCreateEmployee;
