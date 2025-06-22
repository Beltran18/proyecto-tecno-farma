import React from 'react';
import { useNavigate } from 'react-router-dom';
import './vencimientos.css';
import type { Producto } from '../types/producto';

const Vencimientos: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  // Obtener productos de localStorage
  const productos: Producto[] = JSON.parse(localStorage.getItem('productos') || '[]');
  
  // Filtrar y ordenar productos próximos a vencer
  const fechaActual = new Date();
  const productosProximosAVencer = productos
    .filter((producto: Producto) => {
      const fechaVencimiento = new Date(producto.fechaVencimiento);
      return fechaVencimiento > fechaActual;
    })
    .sort((a: Producto, b: Producto) => {
      const fechaA = new Date(a.fechaVencimiento);
      const fechaB = new Date(b.fechaVencimiento);
      return fechaA.getTime() - fechaB.getTime();
    });

  // Mostrar solo los próximos 5 productos a vencer
  const productosMostrar = productosProximosAVencer.slice(0, 5);

  return (
    <div className="vencimientos-container">
      <img src="/pildoras-izq.png" className="decoracion izquierda" alt="decoración izquierda" />
      <img src="/pildoras-der.png" className="decoracion derecha" alt="decoración derecha" />

      <div className="boton-regresar">
        <button onClick={handleBack}>
          <span>←</span> Regresar al Dashboard
        </button>
      </div>

      <div className="contenido-vencimientos">
        <div className="encabezado-vencimientos">
          <h2>Productos Próximos a Vencer</h2>
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
                <th>Lote</th>
                <th>Fecha vencimiento</th>
                <th>Días restantes</th>
              </tr>
            </thead>
            <tbody>
              {productosMostrar.map((producto: Producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.lote}</td>
                  <td>{new Date(producto.fechaVencimiento).toLocaleDateString()}</td>
                  <td>
                    <span className={`dias-restantes ${
                      Math.ceil(
                        (new Date(producto.fechaVencimiento).getTime() - fechaActual.getTime()) /
                        (1000 * 60 * 60 * 24)
                      ) < 15 ? 'critico' : 
                      Math.ceil(
                        (new Date(producto.fechaVencimiento).getTime() - fechaActual.getTime()) /
                        (1000 * 60 * 60 * 24)
                      ) < 30 ? 'alerta' : 'normal'
                    }`}>
                      {Math.ceil(
                        (new Date(producto.fechaVencimiento).getTime() - fechaActual.getTime()) /
                        (1000 * 60 * 60 * 24)
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vencimientos;
