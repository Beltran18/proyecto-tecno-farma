import React from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="titulo-principal">Tecno–Farma</h2>
        <h3>Iniciar Sesion</h3>

        <div className="input-group">
          <span className="icon">👤</span>
          <input type="text" placeholder="Usuario" />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Contraseña" />
        </div>

        <button className="btn-ingresar" onClick={handleLogin}>Ingresar</button>

        <p className="registro">
          ¿No tienes cuenta? <Link to="/register">Regístrate Aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
