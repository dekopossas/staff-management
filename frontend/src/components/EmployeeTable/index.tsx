import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface employee {
  id:number,
  fullName: string,
  cpf: string,
  wage: number,
  discount: number,
  dependents: number
}

function EmployeeTable() {
  const [employees, setEmployees] = useState<[employee]>();

  async function loadData() {
    const response = await fetch('http://localhost:3001/employees');
    const data = await response.json();

    setEmployees(data);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div className={styles.container}>
        <h2>Listagem de Funcionários</h2>
        <table>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Salário</th>
            <th>Desconto</th>
            <th>Dependentes</th>
            <th>Desconto IRPF</th>
          </tr>
        </table>
    </div>
  );
}

export default EmployeeTable;
