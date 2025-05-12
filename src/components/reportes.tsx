import React from 'react';
import './reportes.css';

const Reportes: React.FC = () => {
  return (
    <div className="reportes-container">
      <img src="/pildoras-izq.png" alt="izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="derecha" className="decoracion derecha" />

      <div className="header">
        <div className="menu">
          <button className="btn-principal">📊 Reportes</button>
        </div>
        <h1>Reportes</h1>
        <div className="iconos">
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      <div className="contenido">
        <div className="seccion">
          <h2>Productos en stock</h2>
          <table>
            <tbody>
              <tr>
                <td><button className="celda-btn">Nombre</button></td>
                <td><button className="celda-btn">Contabilidad</button></td>
              </tr>
              <tr>
                <td><button className="celda-btn">Producto</button></td>
              </tr>
            </tbody>
          </table>
          <button className="vermas">Ver más</button>
        </div>

        <div className="seccion">
          <h2>Productos a vencer</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre producto</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paracetamol</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
          <button className="vermas">Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default Reportes;
