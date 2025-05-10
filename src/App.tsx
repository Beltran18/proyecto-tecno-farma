import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Soporte from './components/soporte'; // 👈

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/soporte" element={<Soporte />} /> {/* 👈 */}
      </Routes>
    </Router>
  );
}

export default App;
