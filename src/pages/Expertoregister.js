import './Expertoregister.css';
import logo from './logonol.svg';
import { Link } from 'react-router-dom';

const Expertoregister = () => {
  return (
    <div className="Soyexperto">
      <header className="ExpertoR-header">
        <img src={logo} className="ExpertoR-logo" alt="logo"/>
      </header>
      <div className ="col md-4">
      Aquí va un formulario
      </div>
    </div>
  );
};

export default Expertoregister;
