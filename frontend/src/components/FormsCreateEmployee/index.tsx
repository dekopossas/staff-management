import { useHistory, useParams } from 'react-router-dom';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import api from '../../services/api';
import { HTTP } from '../../util/constants';

type Profile = {
  fullName: string;
  cpf: string;
  wage: string;
  discount: string;
  dependents: string;
};

function FormsCreateEmployee() {
  const { register, handleSubmit } = useForm<Profile>();
  
  const history = useHistory();
  const params = useParams();

  const backWindow = () => {
    history.goBack()
  }

  // Preferiria fazer a validação separada com mais calma, esse trecho merece um refactor
  const onSubmit = handleSubmit(async (data: Profile) => {
    const {fullName, cpf, wage, dependents, discount} = data;
    if(fullName !== '' && cpf !== '' && wage !== '' && dependents !== '' && discount !== '') {
      const response = await api.post('/employees', data);
  
      if (response.status === HTTP.CREATED) {
        history.push('/');
      } else {
        alert('Erro ao cadastrar o usuário');
      }
    } else {
      alert('Preencha todos os dados, Por favor.')
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
          <input
            {...register('cpf')}
            type="number"
            name="cpf"
            id="cpf"
            placeholder="Digite o cpf"
          />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="wage">Salário Bruto:</label>
          <input
            {...register('wage')}
            type="text"
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
            type="text"
            name="dependents"
            placeholder="Número de Dependentes"
          />
        </div>
        <div className={styles.fullBox}>
          <input
            type="submit"
            value="registrar"
            id="btn-submit"
            // disabled={!(isEmailValid && isPasswordValid)}
          />
        </div>
        <div className={styles.fullBox}>
          <input
            type="button"
            value="Voltar"
            id="btn-submit"
            onClick={backWindow}
            // disabled={!(isEmailValid && isPasswordValid)}
          />
        </div>
      </form>
    </div>
  );
}

export default FormsCreateEmployee;
