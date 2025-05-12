import React from 'react';
import './vencimientos.css';

const Vencimientos: React.FC = () => {
  return (
    <div className="vencimientos-container">
      <img src="/pildoras-izq.png" className="decoracion izquierda" alt="decoración izquierda" />
      <img src="/pildoras-der.png" className="decoracion derecha" alt="decoración derecha" />

      <div className="menu-lateral">
        <button className="btn-vencimiento">🕒 Próximos a vencer</button>
      </div>

      <div className="contenido-vencimientos">
        <div className="encabezado-vencimientos">
          <h2>Añadir Producto</h2>
          <div className="iconos">
            <span>🔔</span>
            <span>👤</span>
            <span>⚕️</span>
          </div>
        </div>

        <div className="tabla-vencimientos">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Imagen</th>
                <th>Fecha vencimiento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nombre</td>
                <td><img src="/img1.png" alt="producto" /></td>
                <td>22/07/24</td>
              </tr>
              <tr>
                <td>Nombre</td>
                <td><img src="/img2.png" alt="producto" /></td>
                <td>22/07/24</td>
              </tr>
              <tr>
                <td>Nombre</td>
                <td><img src="/img3.png" alt="producto" /></td>
                <td>22/07/24</td>
              </tr>
              <tr>
                <td>Nombre</td>
                <td><img src="/img4.png" alt="producto" /></td>
                <td>22/07/24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vencimientos;
