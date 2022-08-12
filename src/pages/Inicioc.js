import './Inicioc.css';
import logo from './logoh.svg';

const Inicioc = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className ="d-flex align-items-center justify-content-center">
          Labores con expertos disponibles
        </div>
        <div className ="d-flex align-items-center justify-content-center">
          contenido de back
        </div>
      </div>
    );
  };
  
  export default Inicioc;