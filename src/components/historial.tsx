import React from 'react';
import './historial.css';

const Historial: React.FC = () => {
  return (
    <div className="historial-container">
      <img src="/pildoras-izq.png" className="decoracion izquierda" alt="decoración izquierda" />
      <img src="/pildoras-der.png" className="decoracion derecha" alt="decoración derecha" />

      <div className="menu-lateral">
        <button className="btn-historial">📜 Historial</button>
      </div>

      <div className="contenido-historial">
        <div className="encabezado-historial">
          <h2>Historial</h2>
          <div className="iconos">
            <span>🔔</span>
            <span>👤</span>
            <span>⚕️</span>
          </div>
        </div>

        <div className="tabla-historial">
          <table>
            <thead>
              <tr>
                <th>Transacciones</th>
                <th>Entrada</th>
                <th>Salida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cantidad de productos</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td>
              </tr>
              <tr>
                <td></td><td></td><td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Historial;
