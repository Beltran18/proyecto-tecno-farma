import React from 'react';
import './productosDisponibles.css';
import { useNavigate } from 'react-router-dom';

const ProductosDisponibles: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="productos-container">
      <img src="/pildoras-izq.png" alt="decoración izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="decoración derecha" className="decoracion derecha" />

      <div className="productos-header">
        <button className="btn-secundario" onClick={() => navigate('/dashboard')}>
          ← Volver
        </button>
        <h2>Productos Disponibles</h2>

        <div className="iconos-superiores">
          <span>➕</span>
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      <div className="productos-grid">
        {/* Iconos de productos */}
        <div className="producto-icono">🧱</div>
        <div className="producto-icono seleccionado">🧱</div>
        <div className="producto-icono">🧱</div>

        <div className="producto-nombre">......</div>
        <div className="producto-nombre">......</div>
        <div className="producto-nombre">......</div>
      </div>

      <div className="acciones-productos">
        <button>Añadir productos nuevos</button>
        <button>Editar productos del inventario y gestionar pedidos</button>
      </div>
    </div>
  );
};

export default ProductosDisponibles;
