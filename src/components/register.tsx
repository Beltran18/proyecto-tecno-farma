
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div className="registro-container">
      <h1 className="titulo">TecnoFarma</h1>
      <h2 className="subtitulo">Registrar Usuario</h2>
      <div className="formulario">
        <input type="text" placeholder="Usuario" />
        <input type="text" placeholder="Apellidos" />
        <input type="email" placeholder="Correo Electrónico" />
        <div className="genero">
          <label><input type="radio" name="sexo" value="mujer" /> Mujer</label>
          <label><input type="radio" name="sexo" value="hombre" /> Hombre</label>
        </div>
        <input type="password" placeholder="Contraseña" />
        <p>¿Ya tienes cuenta? <Link to="/">Inicia sesión Aquí</Link></p>
      </div>
    </div>
  )
}
