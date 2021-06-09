import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

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
    const response = await fetch('http://localhost:3001/employees');
    const data = await response.json();

    setEmployees(data);
  }

  const DEDUCAO_POR_DEPENDETE = 164.56;
  
  const defineSalarioIR = (valoresParaCalculoDeTaxa: employee) => {
    const{ wage, discount, dependents } = valoresParaCalculoDeTaxa
    const resultado_SALARIOIR = parseInt(wage) - parseInt(discount) - parseInt(dependents) * DEDUCAO_POR_DEPENDETE;
    return resultado_SALARIOIR;
  };
  
  const VALOR_PARA_ISENCAO = 1903.98;
  const VALOR_PARA_ALIQUOTA_MENOR_E_PARCELA_MENOR_DE_IRPF = 2826.65;
  const VALOR_PARA_ALIQUOTA_MEDIA_E_PARCELA_MEDIA_DE_IRPF = 3751.05;
  const VALOR_PARA_ALIQUOTA_GRANDE_E_PARCELA_GRANDE_DE_IRPF = 4664.68;
  
  const TAXA_ALIQUOTA_MENOR = 0.075;
  const TAXA_ALIQUOTA_MEDIA = 0.15;
  const TAXA_ALIQUOTA_GRANDE = 0.225;
  const TAXA_MAXIMA = 0.275;
  
  const PARCELA_MENOR_IRPF = 142.8;
  const PARCELA_MEDIA_DE_IRPF = 354.8;
  const PARCELA_GRANDE_DE_IRPF = 636.13;
  const PARCELA_MAXIMA = 869.36;
  
  const descontaAliquotaEIRPF = (salarioIR: number) => {
    if (salarioIR <= VALOR_PARA_ISENCAO) {
      return salarioIR;
    } else if (salarioIR <= VALOR_PARA_ALIQUOTA_MENOR_E_PARCELA_MENOR_DE_IRPF) {
      return salarioIR * TAXA_ALIQUOTA_MENOR - PARCELA_MENOR_IRPF;
    } else if (salarioIR <= VALOR_PARA_ALIQUOTA_MEDIA_E_PARCELA_MEDIA_DE_IRPF) {
      return salarioIR * TAXA_ALIQUOTA_MEDIA - PARCELA_MEDIA_DE_IRPF;
    } else if (salarioIR <= VALOR_PARA_ALIQUOTA_GRANDE_E_PARCELA_GRANDE_DE_IRPF) {
      return salarioIR * TAXA_ALIQUOTA_GRANDE - PARCELA_GRANDE_DE_IRPF;
    }
    return salarioIR * TAXA_MAXIMA - PARCELA_MAXIMA;
  };
  
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
              <td>{parseInt(employee.wage)}</td>
              <td>{parseInt(employee.discount)}</td>
              <td>{parseInt(employee.dependents)}</td>
              <td>{descontaAliquotaEIRPF(defineSalarioIR(employee))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
