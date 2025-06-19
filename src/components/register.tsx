
import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="titulo-principal">Tecno–Farma</h2>
        <h3>Registro</h3>

        <div className="input-group">
          <span className="icon">👤</span>
          <input type="text" placeholder="Usuario" />
        </div>

        <div className="input-group">
          <span className="icon">📝</span>
          <input type="text" placeholder="Apellidos" />
        </div>

        <div className="input-group">
          <span className="icon">📧</span>
          <input type="email" placeholder="Correo Electrónico" />
        </div>

        <div className="gender-group">
          <h4>Sexo</h4>
          <div className="gender-options">
            <label>
              <input type="radio" name="sexo" value="mujer" />
              <span className="icon">♀️</span>
              <span>Mujer</span>
            </label>
            <label>
              <input type="radio" name="sexo" value="hombre" />
              <span className="icon">♂️</span>
              <span>Hombre</span>
            </label>
          </div>
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Contraseña" />
        </div>

        <button className="btn-ingresar">Registrarse</button>

        <p className="registro">
          ¿Ya tienes cuenta? <Link to="/">Iniciar Sesión</Link>
        </p>
      </div>
    </div>
  );
}
