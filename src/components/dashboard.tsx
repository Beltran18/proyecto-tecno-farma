import React, { useState } from 'react';
import './dashboard.css';
import Categorias from './categorias';
import Productos from './productos';

const menuItems = [
  {
    title: 'Categorías',
    path: 'categorias',
    icon: '📁'
  },
  {
    title: 'Productos',
    path: 'productos',
    icon: '📦'
  },
  {
    title: 'Notificaciones',
    path: 'notificaciones',
    icon: '🔔'
  }
];

const Dashboard: React.FC = () => {
  const [paginaActual, setPaginaActual] = useState<string>('productos');
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);

  const handleMenuClick = (path: string) => {
    setPaginaActual(path);
    setMenuAbierto(false);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="dashboard-container">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon">☰</span>
        <span className="menu-title">Menú</span>
      </div>

      <div className="menu-lateral" style={{ width: menuAbierto ? '250px' : '60px' }}>
        {menuItems.map((menu, index) => (
          <button
            key={index}
            className={`menu-item ${paginaActual === menu.path ? 'active' : ''}`}
            onClick={() => handleMenuClick(menu.path)}
          >
            <span className="menu-icon">{menu.icon}</span>
            <span className={`menu-text ${menuAbierto ? 'visible' : 'hidden'}`}>
              {menu.title}
            </span>
          </button>
        ))}
      </div>

      <div className="contenido-principal">
        {paginaActual === 'categorias' && <Categorias />}
        {paginaActual === 'productos' && <Productos />}
        {paginaActual === 'notificaciones' && (
          <div className="notificaciones-container">
            <h3>Notificaciones</h3>
            <p>Esta sección mostrará las notificaciones del sistema.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;




