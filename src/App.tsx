import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Soporte from './components/soporte';
import ManualUso from './components/manualuso';
import ProductosDisponibles from './components/productosdisponibles';
import AñadirProducto from './components/addproduct'; // nueva importación
import BuscarProducto from './components/buscarproducto'; // nueva importación

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/manual" element={<ManualUso />} />
        <Route path="/productos" element={<ProductosDisponibles />} />
        <Route path="/añadir-producto" element={<AñadirProducto />} />
        <Route path="/buscar-producto" element={<BuscarProducto />} />
      </Routes>
    </Router>
  );
}

export default App;



