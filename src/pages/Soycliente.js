import './Soycliente.css';
import logo from './logonol.svg';
import { Link } from 'react-router-dom';
import ContentRec from '../contentRec'
import Forminc from '../forminicioc';

const Soycliente = () => {
  return (
    <div className="Soycliente">
      <header className="Cliente-header">
        <img src={logo} className="Cliente-logo" alt="logo"/>
      </header>
      <div className ="col md-4">
      <div className ="Contenido-uno">
        <ContentRec title="Ya soy cliente" bgcolor="rgba(217, 217, 217, 1)"/>
      </div>
      <br/>
      <Forminc></Forminc>
      <br/>
      ¿No tienes una cuenta?
      <Link to="/clienteregister">Registrate aquí</Link>
      </div>
    </div>
  );
};

export default Soycliente;
