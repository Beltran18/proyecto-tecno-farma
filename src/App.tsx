import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Soporte from './components/soporte';
import ManualUso from './components/manualuso';
import ProductosDisponibles from './components/productosdisponibles'; // <- nuevo

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} /> {/* Ruta predeterminada a Login */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/manual" element={<ManualUso />} />
        <Route path="/productos" element={<ProductosDisponibles />} /> {/* <- nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;


