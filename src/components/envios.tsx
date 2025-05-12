import React from 'react';
import './envios.css';

const Envios: React.FC = () => {
  return (
    <div className="envios-container">
      <img src="/pildoras-izq.png" className="decoracion izquierda" alt="decoración izquierda" />
      <img src="/pildoras-der.png" className="decoracion derecha" alt="decoración derecha" />

      <div className="menu-lateral">
        <button className="btn-envio">➕ Añadir producto</button>
      </div>

      <div className="contenido-envios">
        <div className="encabezado-envios">
          <h2>Añadir Producto</h2>
          <div className="iconos">
            <span>🔔</span>
            <span>👤</span>
            <span>⚕️</span>
          </div>
        </div>

        <div className="botones-envios">
          <button className="boton-grande">PRODUCTOS ENVIADOS</button>
        </div>

        <div className="envios-lista">
          <div className="fila-envio">
            <img src="/casa.png" alt="Casa" className="icono-casa" />
            <span className="linea-punteada" />
            <img src="/caja.png" alt="Caja" className="icono-caja" />
          </div>
          <div className="fila-envio">
            <img src="/casa.png" alt="Casa" className="icono-casa" />
            <span className="linea-punteada" />
            <img src="/caja.png" alt="Caja" className="icono-caja" />
          </div>
          <div className="fila-envio">
            <img src="/casa.png" alt="Casa" className="icono-casa" />
            <span className="linea-punteada" />
            <img src="/caja.png" alt="Caja" className="icono-caja" />
          </div>
        </div>

        <div className="botones-envios">
          <button className="boton-grande">PRODUCTOS A ENVIAR</button>
        </div>
      </div>
    </div>
  );
};

export default Envios;

