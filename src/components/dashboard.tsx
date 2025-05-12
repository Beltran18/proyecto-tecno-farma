import React from 'react';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <img src="/pildoras-izq.png" alt="decoración izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="decoración derecha" className="decoracion derecha" />

      <div className="dashboard-header">
        <div className="menu-izquierdo">
          <button className="btn-secundario" onClick={() => navigate('/soporte')}>📘 Soporte</button>
          <button className="btn-secundario" onClick={() => navigate('/manual')}>📄 Manual de Uso</button>
        </div>

        <div className="saludo">
          <h2>Buenas Tardes!</h2>
          <h3>Administrador</h3>
        </div>

        <div className="iconos-superiores">
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      <div className="dashboard-botones">
        <div className="columna">
          <button onClick={() => navigate('/buscar-producto')}>🔍 Buscar Producto</button>
          <button onClick={() => navigate('/productos')}>📦 Productos Disponibles</button>
          <button>⏳ Próximos a vencer</button>
          <button>🏭 Proveedores</button>
          <button>📊 Reportes</button>
          <button onClick={() => navigate('/producto-importar')}>📁 Producto</button> {/* ✅ ACTUALIZADO */}
        </div>
        <div className="columna">
          <button>📜 Historial</button>
          <button>🚚 Envíos</button>
          <button>📝 Solicitar Envíos</button>
          <button onClick={() => navigate('/añadir-producto')}>➕ Añadir producto</button>
          <button>💳 Facturación</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




