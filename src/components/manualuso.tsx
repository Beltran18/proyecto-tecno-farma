import React from 'react';
import './manual.css';

const ManualUso: React.FC = () => {
  return (
    <div className="manual-container">
      <img src="/pildoras-izq.png" alt="izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="derecha" className="decoracion derecha" />

      <div className="manual-header">
        <button className="btn-secundario">📄 Manual de Uso</button>
        <h2>Manual de Usuario</h2>
        <div className="iconos-superiores">
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      <div className="manual-preguntas">
        <button className="btn-pregunta">¿Cómo funciona el software?</button>
        <button className="btn-pregunta">¿Cómo solicitar un informe vía correo electrónico?</button>
        <button className="btn-pregunta">¿Cómo puedo agregar un producto nuevo al inventario?</button>
        <button className="btn-pregunta">📥 Descargar Manual</button>
        <button className="btn-pregunta">🧾 Instrucciones de uso de Software</button>
      </div>
    </div>
  );
};

export default ManualUso;

