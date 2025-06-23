import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ventas.css';

interface Venta {
  producto: string;
  cantidad: number;
  fecha: string;
}

const Ventas: React.FC = () => {
  const navigate = useNavigate();
  const [producto, setProducto] = useState<string>('');
  const [cantidad, setCantidad] = useState<number>(1);
  const [editandoVenta, setEditandoVenta] = useState<{ id: number; producto: string; cantidad: number } | null>(null);
  const [ventas, setVentas] = useState<Venta[]>([]);
  const [previewVenta, setPreviewVenta] = useState<{ producto: string; cantidad: number } | null>(null);

  // Cargar ventas al montar
  useEffect(() => {
    // Cargar ventas del localStorage
    const savedVentas: Venta[] = JSON.parse(localStorage.getItem('ventas') || '[]');
    setVentas(savedVentas);

    // Asegurar que el localStorage tenga un array válido
    if (!Array.isArray(savedVentas)) {
      localStorage.setItem('ventas', JSON.stringify([]));
      setVentas([]);
    }

    // Si hay datos de edición en el estado
    if (window.location.search.includes('edit')) {
      const params = new URLSearchParams(window.location.search);
      const id = parseInt(params.get('id') || '0');
      const producto = params.get('producto') || '';
      const cantidad = parseInt(params.get('cantidad') || '0');
      
      if (id > 0 && producto && cantidad > 0) {
        setEditandoVenta({ id, producto, cantidad });
        setProducto(producto);
        setCantidad(cantidad);
      }
    }
  }, []);

  // Manejar la venta de un producto
  const handleVenta = () => {
    if (!producto || cantidad < 1) return;

    if (editandoVenta) {
      // Actualizar venta existente
      const nuevasVentas = ventas.map((venta: Venta, index: number) => {
        if (index === editandoVenta.id) {
          return {
            producto: producto,
            cantidad: cantidad,
            fecha: venta.fecha // Mantener la fecha original
          };
        }
        return venta;
      });

      setVentas(nuevasVentas);
      localStorage.setItem('ventas', JSON.stringify(nuevasVentas));
      setEditandoVenta(null);
    } else {
      // Crear nueva venta
      const nuevaVenta: Venta = {
        producto: producto,
        cantidad: cantidad,
        fecha: new Date().toISOString()
      };

      setVentas(prev => [...prev, nuevaVenta]);
      localStorage.setItem('ventas', JSON.stringify([...ventas, nuevaVenta]));
    }

    // Limpiar selección
    setProducto('');
    setCantidad(1);
    setPreviewVenta(null);
  };

  // Manejar la previsualización
  const handlePreview = () => {
    if (previewVenta) {
      setProducto(previewVenta.producto);
      setCantidad(previewVenta.cantidad);
      setPreviewVenta(null);
    }
  };

  return (
    <div className="ventas-container">
      <img src="/pildoras-izq.png" alt="izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="derecha" className="decoracion derecha" />

      <div className="header">
        <div className="menu">
          <button className="btn-principal">🛒 Ventas</button>
        </div>
        <h1>Registro de Ventas</h1>
        <div className="iconos">
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      <div className="contenido">
        <div className="seccion">
          <h2>Registrar Venta</h2>
          <div className="venta-form">
            <div className="venta-inputs">
              <div className="input-group">
                <label>Producto</label>
                <input
                  type="text"
                  value={producto}
                  onChange={(e) => setProducto(e.target.value)}
                  placeholder="Escribe el nombre del producto"
                  className="input-producto"
                />
              </div>
              <div className="input-group">
                <label>Cantidad</label>
                <input
                  type="number"
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value) || 1)}
                  min="1"
                  className="input-cantidad"
                />
              </div>
            </div>
            <div className="venta-actions">
              <button
                onClick={() => setPreviewVenta({ producto, cantidad })}
                className="btn-preview"
                disabled={!producto || cantidad < 1}
              >
                📝 Previsualizar
              </button>
              <button
                onClick={handleVenta}
                className="btn-venta"
                disabled={!producto || cantidad < 1}
              >
                {editandoVenta ? 'Actualizar Venta' : 'Registrar Venta'}
              </button>
            </div>
            {previewVenta && (
              <div className="preview-venta">
                <h3>Previsualización de Venta</h3>
                <p>Producto: {previewVenta.producto}</p>
                <p>Cantidad: {previewVenta.cantidad}</p>
                <button
                  onClick={handlePreview}
                  className="btn-preview"
                >
                  ✅ Usar estos datos
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ventas;
