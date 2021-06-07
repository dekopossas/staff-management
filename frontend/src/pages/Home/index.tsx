import React, { useEffect, useState } from "react";
import EmployeeTable from "../../components/EmployeeTable";
import Header from "../../components/Header";
import NavSide from "../../components/NavSide";
import './style.css';
import styles from './styles.module.scss';

interface employee {
    nome: string,
    cpf: string,
    salario: number,
    desconto: number,
    dependentes: number
}

function Home() {
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
      <Header />
      <div className="container">
        <NavSide />
        <EmployeeTable />
      </div>
      
    </div>
  );
}



export default Home;
