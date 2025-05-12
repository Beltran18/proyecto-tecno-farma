import React from 'react';
import './solicitarEnvios.css';

const SolicitarEnvios: React.FC = () => {
  return (
    <div className="solicitar-envios-container">
      <div className="top-icons">
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
        <span className="icon">⚕️</span>
      </div>

      <h1 className="titulo-principal">Añadir Producto</h1>

      <div className="menu-lateral">
        <button className="btn-azul">➕ Añadir producto</button>
      </div>

      <div className="seccion-central">
        <button className="btn-seleccionar">Seleccione el producto</button>

        <div className="contenedor-productos">
          <img src="/producto1.png" alt="producto1" />
          <img src="/producto2.png" alt="producto2" />
          <img src="/producto3.png" alt="producto3" />
          <img src="/producto4.png" alt="producto4" />
          <img src="/producto5.png" alt="producto5" />
          <img src="/producto6.png" alt="producto6" />
          <img src="/producto7.png" alt="producto7" />
          <img src="/producto8.png" alt="producto8" />
        </div>

        <button className="btn-rojo">Gestionar pedidos</button>
      </div>

      <img src="/decoracion-izquierda.png" className="decoracion izquierda" alt="decoración izq" />
      <img src="/decoracion-derecha.png" className="decoracion derecha" alt="decoración der" />
    </div>
  );
};

export default SolicitarEnvios;
