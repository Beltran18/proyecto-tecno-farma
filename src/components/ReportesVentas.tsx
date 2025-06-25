import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './reportes.css';

interface Venta {
  producto: string;
  cantidad: number;
  fecha: string;
}

const ReportesVentas: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  // Estado para las ventas
  const [ventas, setVentas] = useState<Venta[]>(() => 
    JSON.parse(localStorage.getItem('ventas') || '[]')
  );

  // Cargar ventas al montar
  useEffect(() => {
    const savedVentas = JSON.parse(localStorage.getItem('ventas') || '[]') as Venta[];
    if (Array.isArray(savedVentas)) {
      setVentas(savedVentas);
    }
  }, []);

  // Actualizar localStorage cuando las ventas cambien
  useEffect(() => {
    localStorage.setItem('ventas', JSON.stringify(ventas));
  }, [ventas]);
  
  // Calcular estadísticas
  const productosVentas = ventas.reduce((acc: Record<string, number>, venta: Venta) => {
    const producto = venta.producto;
    if (!acc[producto]) {
      acc[producto] = 0;
    }
    acc[producto] += venta.cantidad;
    return acc;
  }, {} as Record<string, number>);

  // Convertir a array para mostrar
  const ventasArray = Object.entries(productosVentas).map(([producto, cantidad]) => ({
    producto,
    cantidad
  }));

  // Calcular el total de productos vendidos
  const totalVendidos = ventasArray.reduce((sum, venta) => sum + venta.cantidad, 0);

  return (
    <div className="reportes-container">
      <div className="header">
        <div className="menu">
          <button className="btn-principal" onClick={handleBack}>
            <span>←</span> Regresar al Dashboard
          </button>
          <button className="btn-principal">📊 Reportes de Ventas</button>
        </div>
        <h1>Reportes de Ventas</h1>
        <div className="iconos">
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      <div className="contenido">
        <div className="seccion">
          <h2>Productos Vendidos</h2>
          <div className="total-vendidos">
            <h3>Total de productos vendidos: {totalVendidos}</h3>
          </div>

          <div className="tabla-container">
            <table className="tabla-ventas">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad Vendida</th>
                </tr>
              </thead>
              <tbody>
                {ventasArray.map((venta, index) => (
                  <tr key={index}>
                    <td>{venta.producto}</td>
                    <td>{venta.cantidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportesVentas;
