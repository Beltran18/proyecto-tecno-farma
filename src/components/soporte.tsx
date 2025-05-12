import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './soporte.css';

const Soporte: React.FC = () => {
  const navigate = useNavigate(); 

  return (
    <div className="soporte-container">
      {/* Decoración de píldoras */}
      <img src="/pildoras-izq.png" alt="decoración izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="decoración derecha" className="decoracion derecha" />

      {/* Encabezado superior */}
      <div className="encabezado-superior">
        <button className="btn-lateral">📘 Soporte</button>
        <div className="iconos-superiores">
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      {/* Título */}
      <h2 className="titulo">Soporte Tecnico</h2>

      {/* Botones de soporte */}
      <div className="contenido-soporte">
        <button onClick={() => navigate('/soporte-chat')} className="btn-chat">
          Solicitar Ayuda Vía Chat
        </button>

        <div className="mensajes-chat">
          <button>👨‍⚕️ Hola. ¿En qué podemos ayudarte?</button>
          <button>Tengo un problema...</button>
          <button>¡Claro!, Cuéntanos</button>
          <button>............</button>
          <button>............</button>
        </div>
      </div>
    </div>
  );
};

export default Soporte;



