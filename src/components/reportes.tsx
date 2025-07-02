import React from 'react';

const Reportes: React.FC = () => {
  return (
    <div className="reportes-container">
      <img src="/pildoras-izq.png" alt="izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="derecha" className="decoracion derecha" />

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd'
      }}>
        <div>
          <button style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>📊 Reportes</button>
        </div>
        <h1 style={{
          margin: 0,
          fontSize: '1.5rem'
        }}>Reportes</h1>
        <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🔔</span>
          <span style={{ fontSize: '1.5rem' }}>👤</span>
          <span style={{ fontSize: '1.5rem' }}>⚕️</span>
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
