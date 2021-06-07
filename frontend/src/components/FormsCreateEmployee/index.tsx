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
          <label htmlFor="wage" >Salário Bruto:
          
            <input type="number" name="wage" id="wage" placeholder="Digite o Salário Bruto"/>
          </label>
        </div>
        <div className="half-box">
          <label htmlFor="discount" >Desconto na Previdencia:
          
            <input type="text" name="discount" id="discount" placeholder="Digite o Desconto na Previdencia"/>
          </label>
        </div>
        <div className="half-box">
          <label htmlFor="dependents" >Número de Dependentes:
          
            <input type="number" name="dependents" id="dependents" placeholder="Digite o Número de Dependentes"/>
          </label>
        </div>
        <div className="half-box">
            <input type="submit" value="registrar" id="btn-submit" />
        </div>       
      </form>
    </div>
  );
}

export default FormsCreateEmployee;
