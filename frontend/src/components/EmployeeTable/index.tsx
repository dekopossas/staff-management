import { useEffect, useState } from 'react';
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
      {
        employees?.map(employee => <div key={employee.id}>{employee.fullName}</div>)
      }
    </div>
  );
}

export default EmployeeTable;
