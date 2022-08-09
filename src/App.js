import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Soycliente from './pages/Soycliente'
import Clienteregister from './pages/Clienteregister'
import Soyexperto from './pages/Soyexperto'
import Expertoregister from './pages/Expertoregister'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="soycliente" element={<Soycliente />} />
    <Route path="clienteregister" element={<Clienteregister />} />
    <Route path="soyexperto" element={<Soyexperto />} />
    <Route path="expertoregister" element={<Expertoregister />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
