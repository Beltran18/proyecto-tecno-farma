import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import Soporte from './components/soporte';
import ManualUso from './components/manualuso';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} /> {/* Ruta predeterminada a Login */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Asegúrate de que esta ruta esté aquí */}
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/manual" element={<ManualUso />} />
      </Routes>
    </Router>
  );
}

export default App;



