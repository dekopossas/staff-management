import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { valorPara, taxa, parcela } from '../../util/constants';

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
    const salario = parseInt(wage)
    const desconto = parseFloat(discount)
    const dependentes = parseInt(dependents) * DEDUCAO_POR_DEPENDETE
    
    const resultado_SALARIOIR = salario - desconto - dependentes;
    
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
    if (salarioIR <= valorPara.ISENCAO) {
      return salarioIR;
    } else if (salarioIR <= valorPara.ALIQUOTA_MENOR_E_PARCELA_MENOR_DE_IRPF) {
      return salarioIR * TAXA_ALIQUOTA_MENOR - PARCELA_MENOR_IRPF;
    } else if (salarioIR <= valorPara.ALIQUOTA_MEDIA_E_PARCELA_MEDIA_DE_IRPF) {
      return salarioIR * TAXA_ALIQUOTA_MEDIA - PARCELA_MEDIA_DE_IRPF;
    } else if (salarioIR <= valorPara.ALIQUOTA_GRANDE_E_PARCELA_GRANDE_DE_IRPF) {
      return salarioIR * TAXA_ALIQUOTA_GRANDE - PARCELA_GRANDE_DE_IRPF;
    }
    return salarioIR * TAXA_MAXIMA - PARCELA_MAXIMA;
  };

  const employeeIRPF = (employee: employee) => {
    return descontaAliquotaEIRPF(defineSalarioIR(employee)).toFixed(2)
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
              <td>{employee.wage}</td>
              <td>{employee.discount}</td>
              <td>{employee.dependents}</td>
              <td>{employeeIRPF(employee)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
