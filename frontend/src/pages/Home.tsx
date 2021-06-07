import React, { useEffect, useState } from "react";

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
    <div>
      {
        employees?.map(employee => employee.nome)
      }
    </div>
  );
}



export default Home;
