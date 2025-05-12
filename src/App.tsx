import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Soporte from './components/soporte';
import ManualUso from './components/manualuso';
import ProductosDisponibles from './components/productosdisponibles';
import AñadirProducto from './components/addproduct';
import BuscarProducto from './components/buscarproducto';
import ProductoImportar from './components/productoimportar'; // ✅ NUEVA IMPORTACIÓN
import Reportes from './components/reportes';
import Facturacion from './components/facturacion';
import Historial from './components/historial';
import Proveedores from './components/proveedores'; 
import Vencimientos from './components/vencimientos'; 

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
        <Route path="/producto-importar" element={<ProductoImportar />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/facturacion" element={<Facturacion />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/vencimientos" element={<Vencimientos />} />
      </Routes>
    </Router>
  );
}

export default App;




