import './Ca.css';
import logo from './logoh.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function ChangeRating(props) {
  return (
    <input
      type="number"
      step="1"
      min="1"
      max="5"
      value={props.rating}
      onChange={(e) => {
        if (e.target.value > 5)
          return alert("Números del 0 al 5");
        return props.handleRating(e.target.value);
      }}
    />
  );
};

function StarRating({ stars }) {

  const maxStars = 5;
  const starPercentage = (stars / maxStars) * 100;
  const starPercentageRounded = Math.round(starPercentage);
  const StarStyles = () => {
    return {
      width: starPercentageRounded + "%"
    };
  };
  return (
    <div className="stars-gray">
      <div className="stars-yellow" style={StarStyles()}></div>
    </div>
  );
};


const Ca = () => {
  const [avgRating, setAvgRating] = useState(0);

  const handleRating = (input) => {
    setAvgRating(input);
  };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <br />
        <div className ="d-flex align-items-center justify-content-center">
        Todo listo, califica tu experiencia.
        </div>
        <br />
        <div className ="d-flex align-items-center justify-content-center">
        <ChangeRating rating={avgRating} handleRating={handleRating} />
      <StarRating stars={avgRating} />
      </div>
      <br />
      <div className ="d-flex align-items-center justify-content-center">
        Formulario Pago
        </div>
        <br />
        <div className ="d-flex align-items-center justify-content-center">
        Gracias por usar nuestros servicios
        </div>
        <br />
        <div className ="d-flex align-items-center justify-content-center">
        <Link to="/inicioc" className="btn btn-outline-secondary">Volver al inicio</Link>
        </div>
      </div>
    );
  };
  
  export default Ca;