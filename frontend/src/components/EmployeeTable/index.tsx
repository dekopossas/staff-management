import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import api from '../../services/api';
import styles from './styles.module.scss';
import * as func from '../../util/functions';

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
  }

  const employeeIRPF = (employee: employee) => {
    return func.descontaAliquotaEIRPF(func.defineSalarioIR(employee))
      .toFixed(2)
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
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.fullName}</td>
              <td>{employee.cpf}</td>
              <td>{`R$${(parseInt(employee.wage)).toFixed(2)}`}</td>
              <td>{`R$${(parseInt(employee.discount)).toFixed(2)}`}</td>
              <td>{employee.dependents}</td>
              <td>{`R$${employeeIRPF(employee)}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
