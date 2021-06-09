import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import api from '../../services/api';
import { HTTP } from '../../util/constants';
import { useEffect, useState } from 'react';

type Profile = {
  fullName: string;
  cpf: string;
  wage: string;
  discount: string;
  dependents: string;
};

function FormsCreateEmployee() {
  const { register, handleSubmit } = useForm<Profile>();
  const [employee, setEmployee] = useState<Profile>({
    fullName: '',
    cpf: '',
    wage: '',
    discount: '',
    dependents: '',
  });

  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const findEmployee = async (id: string) => {
    const response = await api.get(`/employees/${id}`);
    setEmployee({
      fullName: response.data.fullName,
      cpf: response.data.cpf,
      wage: response.data.wage,
      discount: response.data.discount,
      dependents: response.data.dependents,
    });
  };

  const backWindow = () => {
    history.goBack();
  };

  // Preferiria fazer a validação separada com mais calma, esse trecho merece um refactor
  const onSubmit = handleSubmit(async (data: Profile) => {
    const { fullName, cpf, wage, dependents, discount } = data;
    if (fullName !== '' && cpf !== '' && wage !== '' && dependents !== '' && discount !== '') {
      if (id !== undefined) {
        const response = await api.post('/employees', data);

        if (response.status === HTTP.CREATED) {
          history.push('/');
        } else {
          alert('Erro ao cadastrar o usuário');
        }
      } else {
        const response = await api.post('/employees', data);
      
        if (response.status === HTTP.CREATED) {
          history.push('/');
        } else {
          alert('Erro ao cadastrar o usuário');
        }
      }

    } else {
      alert('Preencha todos os dados, Por favor.');
    }
  });

  useEffect(() => {
    if (id !== undefined) {
      findEmployee(id);
    }
  }, [id]);

  return (
    <div className={styles.container}>
      {id ? <h1>Editando Funcionario</h1> : <h1>Cadastrando Funcionario</h1>}
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.fullBox}>
          <label htmlFor="fullName">Nome do Funcionário:</label>
          <input
            {...register('fullName')}
            value={employee.fullName}
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
            value={employee.cpf}
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
            value={employee.wage}
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
            value={employee.discount}
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
            value={employee.dependents}
            id="dependents"
            type="text"
            name="dependents"
            placeholder="Número de Dependentes"
          />
        </div>
        <div className={styles.fullBox}>
          <input
            type="submit"
            value={id ? 'Salvar Alterações' : 'Registrar'}
            id="btn-submit"
          />
        </div>
        <div className={styles.fullBox}>
          <input
            type="button"
            value="Voltar"
            id="btn-submit"
            onClick={backWindow}
          />
        </div>
      </form>
    </div>
  );
}

export default FormsCreateEmployee;
