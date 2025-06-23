
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <div className="logo-container">
          <img src="/logo.png" alt="Tecno-Farma" className="logo" />
          <h2 className="titulo-principal">Tecno–Farma</h2>
        </div>
        <h3>Registro</h3>

        <form className="register-form">
          <div className="input-group">
            <div className="icon-container">
              <span className="icon">👤</span>
            </div>
            <input type="text" placeholder="Nombre de Usuario" className="input-field" required />
          </div>

          <div className="input-group">
            <div className="icon-container">
              <span className="icon">📧</span>
            </div>
            <input type="email" placeholder="Correo Electrónico" className="input-field" required />
          </div>

          <div className="input-group">
            <div className="icon-container">
              <span className="icon">🔒</span>
            </div>
            <input type="password" placeholder="Contraseña" className="input-field" required />
          </div>

          <div className="terms-and-conditions">
            <label className="terms-label">
              <input type="checkbox" required />
              <span>Acepto los términos y condiciones</span>
            </label>
          </div>

          <button type="submit" className="btn-ingresar">
            <span className="button-text">Registrarse</span>
            <span className="button-icon">→</span>
          </button>

          <p className="registro">
            ¿Ya tienes cuenta? <Link to="/">Iniciar Sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
