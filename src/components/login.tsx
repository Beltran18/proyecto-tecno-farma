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
        <div className="logo-container">
          <img src="/logo.png" alt="Tecno-Farma" className="logo" />
          <h2 className="titulo-principal">Tecno–Farma</h2>
        </div>
        <h3>Iniciar Sesión</h3>

        <form className="login-form">
          <div className="input-group">
            <div className="icon-container">
              <span className="icon">👤</span>
            </div>
            <input type="text" placeholder="Usuario" className="input-field" />
          </div>

          <div className="input-group">
            <div className="icon-container">
              <span className="icon">🔒</span>
            </div>
            <input type="password" placeholder="Contraseña" className="input-field" />
          </div>

          <div className="remember-forgot">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Recordarme</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">¿Olvidaste tu contraseña?</Link>
          </div>

          <button type="submit" className="btn-ingresar" onClick={handleLogin}>
            <span className="button-text">Ingresar</span>
            <span className="button-icon">→</span>
          </button>

          <p className="registro">
            ¿No tienes cuenta? <Link to="/register">Regístrate Aquí</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
