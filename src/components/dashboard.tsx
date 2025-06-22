import React, { useState } from 'react';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  {
    title: 'Gestión de Productos',
    items: [
      { icon: '🔍', text: 'Buscar Producto', path: '/buscar-producto' },
      { icon: '💊', text: 'Productos Disponibles', path: '/productos' },
      { icon: '⏰', text: 'Próximos a vencer', path: '/vencimientos' }
    ]
  },
  {
    title: 'Gestión de Envíos',
    items: [
      { icon: '📦', text: 'Envíos', path: '/envios' },
      { icon: '🚚', text: 'Solicitar Envíos', path: '/solicitar-envios' },
      { icon: '📊', text: 'Reportes', path: '/reportes' }
    ]
  },
  {
    title: 'Gestión de Ventas',
    items: [
      { icon: '📋', text: 'Historial', path: '/historial' },
      { icon: '💰', text: 'Facturación', path: '/facturacion' }
    ]
  },
  {
    title: 'Gestión de Proveedores',
    items: [
      { icon: '🏢', text: 'Proveedores', path: '/proveedores' }
    ]
  }
];

const Dashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMenuClick = (menuTitle: string) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="menu-izquierdo">
          <button className="btn-secundario" onClick={() => navigate('/soporte')}>
            <span>📘</span> Soporte
          </button>
          <button className="btn-secundario" onClick={() => navigate('/manual')}>
            <span>📄</span> Manual de Uso
          </button>
        </div>

        <div className="saludo">
          <h2>¡Bienvenido!</h2>
          <h3>Administrador</h3>
        </div>


      </div>

      <div className="menu-container">
        {menuItems.map((menu, index) => (
          <div key={index} className="menu-section">
            <button
              className={`menu-header ${activeMenu === menu.title ? 'active' : ''}`}
              onClick={() => handleMenuClick(menu.title)}
            >
              <span className="menu-icon">📁</span>
              {menu.title}
              <span className="arrow">▼</span>
            </button>
            
            {activeMenu === menu.title && (
              <div className="menu-items">
                {menu.items.map((item, i) => (
                  <button
                    key={i}
                    className="menu-item"
                    onClick={() => navigate(item.path)}
                  >
                    <span className="menu-icon">{item.icon}</span>
                    {item.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;




