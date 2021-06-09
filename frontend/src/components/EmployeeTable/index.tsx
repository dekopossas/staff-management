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

  const DEDUCAO_POR_DEPENDETE = 164.56

  const defineSalarioIR = (salario: number, dependentes: number, desconto:number) => {
    const resultado = (salario - desconto - (dependentes * DEDUCAO_POR_DEPENDETE))
    return resultado
  };

  const VALOR_MINIMO_DE_ISENCAO = 1903.98
  const VALOR_DA_ISENCAO = 0
  const VALOR_PARA_SETE_E_MEIO_DE_TAXA = 2826.65
  const SETE_E_MEIO_DE_TAXA = 7.5/100
  const QUINZE_DE_TAXA_DE_ATE = 3751.05
  const VINTE_E_DOIS_DE_ATE = 4664.68

  const defineAliquita = (salario: number) => {
    if (salario <= VALOR_MINIMO_DE_ISENCAO) {
      return VALOR_DA_ISENCAO
    } else if (salario <= VALOR_PARA_SETE_E_MEIO_DE_TAXA) {
      return SETE_E_MEIO_DE_TAXA
    }
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
