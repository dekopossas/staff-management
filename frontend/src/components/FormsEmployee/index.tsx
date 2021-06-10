import { useHistory, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import api from '../../services/api';
import { HTTP } from '../../util/constants';
import { ChangeEvent, useEffect, useState } from 'react';

type Profile = {
  fullName: string;
  cpf: string;
  wage: string;
  discount: string;
  dependents: string;
};

function FormsEmployee() {
  const [employee, setEmployee] = useState<Profile>({
    fullName: '',
    cpf: '',
    wage: '',
    discount: '',
    dependents: '',
  });

  function updateEmployee (e: ChangeEvent<HTMLInputElement>) {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    })
  }

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
  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullName, cpf, wage, dependents, discount } = employee;
    if (fullName !== '' && cpf !== '' && wage !== '' && dependents !== '' && discount !== '') {
      if (id) {
        const response = await api.put(`/employees/${id}`, employee);

        if (response.status === HTTP.SUCCESS) {
          history.push('/');
        } else {
          alert('Erro ao cadastrar o usuário');
        }
      } else {
        const response = await api.post('/employees', employee);
      
        if (response.status === HTTP.CREATED) {
          history.push('/');
        } else {
          alert('Erro ao cadastrar o usuário');
        }
      }

    } else {
      alert('Preencha todos os dados, Por favor.');
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      findEmployee(id);
    }
  }, [id]);

  return (
    <div className={styles.container}>
      {id ? <h1>Editando Funcionário</h1> : <h1>Cadastrando Funcionario</h1>}
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.fullBox}>
          <label htmlFor="fullName">Nome do Funcionário:</label>
          <input
            value={employee.fullName}
            type="text"
            name="fullName"
            onChange={(event: ChangeEvent<HTMLInputElement>) => updateEmployee(event)}
            id="fullName"
            placeholder="Digite o nome"
          />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="cpf">CPF:</label>
          <input
            value={employee.cpf}
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) => updateEmployee(event)}
            name="cpf"
            id="cpf"
            placeholder="Digite o cpf"
          />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="wage">Salário Bruto:</label>
          <input
            value={employee.wage}
            type="text"
            onChange={(event: ChangeEvent<HTMLInputElement>) => updateEmployee(event)}
            name="wage"
            id="wage"
            placeholder="Salário Bruto"
          />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="discount">Desconto na Previdência:</label>
          <input
            value={employee.discount}
            onChange={(event: ChangeEvent<HTMLInputElement>) => updateEmployee(event)}
            id="discount"
            type="text"
            name="discount"
            placeholder="Desconto na Previdência"
          />
        </div>
        <div className={styles.halfBox}>
          <label htmlFor="dependents">Número de Dependentes:</label>
          <input
            value={employee.dependents}
            onChange={(event: ChangeEvent<HTMLInputElement>) => updateEmployee(event)}
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
            // disabled={!(isEmailValid && isPasswordValid)}
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

export default FormsEmployee;
