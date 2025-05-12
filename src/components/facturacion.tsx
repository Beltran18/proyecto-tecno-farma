import React from 'react';
import './facturacion.css';

const Facturacion: React.FC = () => {
  return (
    <div className="facturacion-container">
      <img src="/pildoras-izq.png" alt="decoración izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="decoración derecha" className="decoracion derecha" />

      <div className="encabezado">
        <button className="btn-menu">☰</button>
        <h1>Facturacion</h1>
        <div className="iconos">
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      <div className="sub-menu">
        <button className="btn-submenu activo">🧾 Facturacion</button>
      </div>

      <div className="opciones">
        <div className="opcion">
          <img src="/sistema-pago.png" alt="Sistema de pago" />
          <button className="btn-opcion">Sistema de Pago</button>
        </div>
        <div className="opcion">
          <img src="/codigo-barras.png" alt="Código de barras" />
          <button className="btn-opcion">Leer codigo De Barras Producto.</button>
        </div>
        <div className="opcion">
          <img src="/calculo.png" alt="Sistema de cálculo" />
          <button className="btn-opcion">Sistema de calculo</button>
        </div>
      </div>
    </div>
  );
};

export default Facturacion;
