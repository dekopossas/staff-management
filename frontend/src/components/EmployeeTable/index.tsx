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
    const resultado_SALARIOIR = (salario - desconto - (dependentes * DEDUCAO_POR_DEPENDETE))
    return resultado_SALARIOIR
  };

  const VALOR_MAXIMO_PARA_ISENCAO = 1903.98
  const TAXA_DE_ISENTOS = 0
  const VALOR_MAXIMO_PARA_7_E_MEIO_E_MENOR_PARCELA_DE_IRPF = 2826.65
  const TAXA_DE_7_E_MEIO = 7.5/100
  const MENOR_PARCELA_IRPF = 142.80
  const VALOR_MAXIMO_PARA_15 = 3751.05
  const TAXA_DE_15 = 15/100
  const VALOR_MAXIMO_PARA_22_MEIO = 4664.68
  const TAXA_DE_22_E_MEIO = 22.5/100
  const TAXA_MAXIMA = 27.5/100

  const VALOR_INICIAL_DE_RESULTADO_FINAL = 0

  const defineAliquitaEparcerlaIRPF = (salarioIR: number) => {
    const resultado_FINAL = VALOR_INICIAL_DE_RESULTADO_FINAL
    if (salarioIR <= VALOR_MAXIMO_PARA_ISENCAO) {
      return 
    } else if (salarioIR <= VALOR_MAXIMO_PARA_7_E_MEIO_E_MENOR_PARCELA_DE_IRPF) {
      return TAXA_DE_7_E_MEIO
    } else if (salarioIR <= VALOR_MAXIMO_PARA_15) {
      return TAXA_DE_15
    } else if (salarioIR <= VALOR_MAXIMO_PARA_22_MEIO) {
      return TAXA_DE_22_E_MEIO
    }
    return TAXA_MAXIMA
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
