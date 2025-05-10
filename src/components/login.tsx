import React from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí podrías validar el usuario y contraseña
    // Por ahora solo redirigimos
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <img src="/logo-medicina.png" alt="logo" className="logo-superior" />

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

      <img src="/pildoras-izq.png" alt="decoración izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="decoración derecha" className="decoracion derecha" />
    </div>
  );
};

export default Login;
