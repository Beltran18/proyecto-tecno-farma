import React from 'react';
import './proveedores.css';

const Proveedores: React.FC = () => {
  return (
    <div className="proveedores-container">
      <img src="/pildoras-izq.png" className="decoracion izquierda" alt="decoración izquierda" />
      <img src="/pildoras-der.png" className="decoracion derecha" alt="decoración derecha" />

      <div className="menu-lateral">
        <button className="btn-proveedores">🏭 Proveedores</button>
      </div>

      <div className="contenido-proveedores">
        <div className="encabezado-proveedores">
          <h2>Proveedores</h2>
          <div className="iconos">
            <span>🔔</span>
            <span>👤</span>
            <span>⚕️</span>
          </div>
        </div>

        <div className="tabla-proveedores">
          <table>
            <thead>
              <tr>
                <th>Nombre proveedor</th>
                <th>cantidad de productos</th>
                <th>nombre del producto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Proveedores;
