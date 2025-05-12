import React from 'react';
import './productoimportar.css';

const ProductoImportar: React.FC = () => {
  return (
    <div className="producto-importar-container">
      <img src="/pildoras-izq.png" alt="decoración izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="decoración derecha" className="decoracion derecha" />

      <div className="encabezado">
        <button className="btn-volver">☰</button>
        <h1>Producto</h1>
        <div className="iconos-superiores">
          <span>⚕️</span>
          <span>🔔</span>
          <span>🔵</span>
        </div>
      </div>

      <div className="contenido-producto">
        <div className="panel-izquierdo">
          <button className="btn-seleccionado">📁 Producto</button>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Nombre</td><td>5</td></tr>
              <tr><td>Nombre</td><td>5</td></tr>
              <tr><td>Nombre</td><td>5</td></tr>
              <tr><td>Nombre</td><td>5</td></tr>
            </tbody>
          </table>
        </div>

        <div className="panel-derecho">
          <button className="btn-principal">Importar archivo</button>
          <p>de:</p>
          <button>Mi Para</button>
          <button>Drive</button>
          <button>Vinculo</button>
          <p>Tipo:</p>
          <button>Excel</button>
          <button>CVS</button>
          <div className="botones-finales">
            <button className="btn-cancelar">Cancelar</button>
            <button className="btn-aceptar">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoImportar;
