import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import {
  valorPara,
  taxa,
  parcela,
  deducao,
} from '../../util/constants';

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

  const defineSalarioIR = (valoresParaCalculoDeTaxa: employee) => {
    const{ wage, discount, dependents } = valoresParaCalculoDeTaxa
    const salario = parseInt(wage)
    const desconto = parseFloat(discount)
    const dependentes = parseInt(dependents) * deducao.POR_DEPENDETE
    
    const resultado_SALARIOIR = salario - desconto - dependentes;
    
    return resultado_SALARIOIR;
  };

  const descontaAliquotaEIRPF = (salarioIR: number) => {
    if (salarioIR <= valorPara.ISENCAO) {
      return salarioIR;
    } else if (salarioIR <= valorPara.ALIQUOTA_MENOR_E_PARCELA_MENOR_DE_IRPF) {
      return salarioIR * taxa.ALIQUOTA_MENOR - parcela.MENOR_IRPF;
    } else if (salarioIR <= valorPara.ALIQUOTA_MEDIA_E_PARCELA_MEDIA_DE_IRPF) {
      return salarioIR * taxa.ALIQUOTA_MEDIA - parcela.MEDIA_DE_IRPF;
    } else if (salarioIR <= valorPara.ALIQUOTA_GRANDE_E_PARCELA_GRANDE_DE_IRPF) {
      return salarioIR * taxa.ALIQUOTA_GRANDE - parcela.GRANDE_DE_IRPF;
    }
    return salarioIR * taxa.MAXIMA - parcela.MAXIMA;
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
