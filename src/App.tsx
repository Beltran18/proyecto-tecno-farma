import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Soporte from './components/soporte';
import ManualUso from './components/manualuso';
import ProductosDisponibles from './components/productosdisponibles';
import AñadirProducto from './components/addproduct';
import BuscarProducto from './components/buscarproducto';
import Reportes from './components/reportes';
import ReportesVentas from './components/ReportesVentas';
import Ventas from './components/Ventas';
import Facturacion from './components/facturacion';

import Proveedores from './components/proveedores'; 
import Vencimientos from './components/vencimientos'; 
import Envios from './components/envios';
import SolicitarEnvios from './components/solicitarenvios';
import SoporteChat from './components/soportechat';

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

        <Route path="/reportes" element={<Reportes />} />
        <Route path="/reportes/ventas" element={<ReportesVentas />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/facturacion" element={<Facturacion />} />

        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/vencimientos" element={<Vencimientos />} />
        <Route path="/envios" element={<Envios />} />
        <Route path="/solicitar-envios" element={<SolicitarEnvios />} />
        <Route path="/soporte-chat" element={<SoporteChat />} />
        
      </Routes>
    </Router>
  );
}

export default App;




