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
        {
          employees?.map((employee, index) => (
            <Link to={ `/employee/${employee.id}` } key={ employee.id }>
              <div className="cada-compra">
                <div data-testid={ `${index}-order-card-container` } className="compra">
                  <h4 data-testid={ `${index}-order-number` }>{`Pedido ${employee.id}`}</h4>
                  <h4 data-testid={ `${index}-order-total-value` }>
                  </h4>
                </div>
              </div>
            </Link>
          ))
        }
    </div>
  );
}

export default EmployeeTable;
