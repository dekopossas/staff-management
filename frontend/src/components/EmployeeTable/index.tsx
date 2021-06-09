import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface employee {
  id:number,
  fullName: string,
  cpf: string,
  wage: string,
  discount: string,
  dependents: string
}

function EmployeeTable() {
  const [employees, setEmployees] = useState<[employee]>();

  async function loadData() {
    const response = await fetch('http://localhost:3001/employees');
    const data = await response.json();

    setEmployees(data);
  }

  const arrayDeVariaveisCalculadas = [];

  const DEDUCAO = 164.56

  const defineSalarioIR = (salario: number, dependentes: number, desconto:number) => {
    const resultado = (salario - desconto - (dependentes * DEDUCAO))
    return resultado
  }

  const calculaVariavel = () => {
    employees?.forEach((employee, index) => {

    })
  }

  useEffect(() => {
    loadData();
  }, [])

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
            {
              employees?.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{employee.fullName}</td>
                  <td>{employee.cpf}</td>
                  <td>{parseInt(employee.wage)}</td>
                  <td>{parseInt(employee.discount)}</td>
                  <td>{parseInt(employee.dependents)}</td>
                  <td>variavelCalculada[index]</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  );
}

export default EmployeeTable;
