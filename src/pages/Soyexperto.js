import './Soyexperto.css';
import logo from './logonol.svg';
import { Link } from 'react-router-dom';
import ContentRec from '../contentRec'
import Formine from '../forminicioe';


const Soyexperto = () => {
  return (
    <div className="Soyexperto">
      <header className="Experto-header">
        <img src={logo} className="Experto-logo" alt="logo"/>
      </header>
      <div className ="col md-4">
      <div className ="Contenido-uno">
        <ContentRec title="Soy experto Mande" bgcolor="rgba(217, 217, 217, 1)"/>
      </div>
      <br/>
      <Formine></Formine>
      <br/>
      ¿No tienes una cuenta?
      <Link to="/expertoregister">Registrate aquí</Link>
      </div>
    </div>
  );
};

export default Soyexperto;
