import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import api from '../../services/api';
import styles from './styles.module.scss';
import { HTTP } from '../../util/constants';
import * as func from '../../util/functions';
import { Link } from 'react-router-dom';

interface employee {
  id: number;
  fullName: string;
  cpf: string;
  wage: string;
  discount: string;
  dependents: string;
}

function EmployeeTable() {
  const [employees, setEmployees] = useState<[employee]>();

  async function loadData() {
    const response = await api.get('/employees');

    setEmployees(response.data);
  };

  const employeeIRPF = (employee: employee) => {
    return func.descontaAliquotaEIRPF(func.defineSalarioIR(employee)).toFixed(2);
  };

  const deleteEmployee = async (id: number) => {
    const response = await api.delete(`/employees/${id}`);
    if (response.status === HTTP.CREATED){
      document.location.reload(true)
    } else {
      alert('algo deu errado')
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Listagem de Funcionários</h1>
      <table className={styles.contentTable}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Salário</th>
            <th>Desconto</th>
            <th>Dependentes</th>
            <th>Desconto IRPF</th>
            <th>Configurações</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee) => (
            <tr id={(employee.id).toString()} key={employee.id}>
              <td className={styles.tdLeft}>{employee.fullName}</td>
              <td className={styles.tdLeft}>{employee.cpf}</td>
              <td className={styles.tdRight}>{`R$ ${parseInt(employee.wage).toFixed(2)}`}</td>
              <td className={styles.tdRight}>{`R$ ${parseInt(employee.discount).toFixed(2)}`}</td>
              <td>{employee.dependents}</td>
              <td className={styles.tdRight}>{`R$ ${employeeIRPF(employee)}`}</td>
              <td>
                <Link to="/create-employee">
                  <button>editar</button>/
                </Link>
                <button onClick={() => deleteEmployee(employee.id)}>deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
