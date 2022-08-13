import "./Inicioe.css";
import logo from "./logoh.svg";
import { useEffect } from "react";

const Inicioe = () => {
  useEffect(() => {
    let cookie = JSON.parse(localStorage.getItem("login") ? localStorage.getItem("login") : null);
    if (cookie?.type !== "expert") {
      localStorage.clear();
      window.location.replace("/soyexperto");
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="col md-4"></div>
    </div>
  );
};

export default Inicioe;
