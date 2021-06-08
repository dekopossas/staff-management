import EmployeeTable from "../../components/EmployeeTable";
import Header from "../../components/Header";
import NavSide from "../../components/NavSide";
import './style.css';
import styles from './styles.module.scss';

function Home() {

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
