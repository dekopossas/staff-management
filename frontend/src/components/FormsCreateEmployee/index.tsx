import { Link } from 'react-router-dom';

function FormsCreateEmployee() {
  return (
    <div id="main-container">
      <h1>Cadastrando Funcionario</h1>
      <form id="register-form">
        <div className="full-box">
          <label htmlFor="name" >Nome do Funcionario:
          
            <input type="text" name="name" id="name" placeholder="Digite o nome"/>
          </label>
        </div>
        <div className="half-box">
          <label htmlFor="name" >CPF:
          
            <input type="text" name="cpf" id="cpf" placeholder="Digite o cpf"/>
          </label>
        </div>
        <div className="half-box">
          <label htmlFor="name" >CPF:
          
            <input type="text" name="name" id="name" placeholder="Digite o nome"/>
          </label>
        </div>
      </form>
    </div>
  );
}

export default FormsCreateEmployee;
