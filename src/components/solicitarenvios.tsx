import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './solicitarEnvios.css';

interface Proveedor {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  direccion: string;
  productos: string[];
}

interface Envio {
  id: number;
  proveedorId: number;
  producto: string;
  cantidad: number;
  fecha: string;
  estado: 'pendiente' | 'en_proceso' | 'entregado';
}

const SolicitarEnvios: React.FC = () => {
  const navigate = useNavigate();
  // Obtener proveedores del localStorage
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [envios, setEnvios] = useState<Envio[]>(() => 
    JSON.parse(localStorage.getItem('envios') || '[]')
  );

  // Estado para el nuevo envío
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState<number | null>(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState<string>('');
  const [cantidad, setCantidad] = useState<number>(0);
  const [productosDisponibles, setProductosDisponibles] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  // Cargar proveedores al montar el componente
  useEffect(() => {
    const storedProveedores = JSON.parse(localStorage.getItem('proveedores') || '[]');
    setProveedores(storedProveedores);
  }, []);

  // Actualizar localStorage cuando los envíos cambien
  useEffect(() => {
    localStorage.setItem('envios', JSON.stringify(envios));
  }, [envios]);

  // Actualizar productos disponibles cuando se seleccione un proveedor
  useEffect(() => {
    if (proveedorSeleccionado) {
      const proveedor = proveedores.find(p => p.id === proveedorSeleccionado);
      setProductosDisponibles(proveedor?.productos || []);
    } else {
      setProductosDisponibles([]);
    }
    setError('');
  }, [proveedorSeleccionado, proveedores]);

  const handleAgregarEnvio = () => {
    if (!proveedorSeleccionado) {
      setError('Por favor seleccione un proveedor');
      return;
    }
    if (!productoSeleccionado) {
      setError('Por favor seleccione un producto');
      return;
    }
    if (cantidad <= 0) {
      setError('La cantidad debe ser mayor a 0');
      return;
    }

    const nuevoEnvio: Envio = {
      id: envios.length + 1,
      proveedorId: proveedorSeleccionado,
      producto: productoSeleccionado,
      cantidad: cantidad,
      fecha: new Date().toISOString(),
      estado: 'pendiente'
    };

    setEnvios(prev => [...prev, nuevoEnvio]);
    setProveedorSeleccionado(null);
    setProductoSeleccionado('');
    setCantidad(0);
    setError('');
  };

  const handleCancelar = () => {
    setProveedorSeleccionado(null);
    setProductoSeleccionado('');
    setCantidad(0);
    setError('');
  };

  const handleVolver = () => {
    navigate('/dashboard');
  };

  return (
    <div className="solicitar-envios-container">
      <div className="header-solicitar">
        <h2>Solicitar Envíos</h2>
        <button onClick={handleVolver} className="btn-volver">
          Volver al Dashboard
        </button>
      </div>

      <div className="formulario-envio">
        <div className="form-group">
          <label>Proveedor:</label>
          <select
            value={proveedorSeleccionado || ''}
            onChange={(e) => setProveedorSeleccionado(parseInt(e.target.value) || null)}
            className="select-proveedor"
          >
            <option value="">Seleccionar proveedor...</option>
            {proveedores.map(proveedor => (
              <option key={proveedor.id} value={proveedor.id}>
                {proveedor.nombre}
              </option>
            ))}
          </select>
        </div>

        {proveedorSeleccionado && (
          <div className="form-group">
            <label>Producto:</label>
            <select
              value={productoSeleccionado}
              onChange={(e) => setProductoSeleccionado(e.target.value)}
              className="select-producto"
            >
              <option value="">Seleccionar producto...</option>
              {productosDisponibles.map(producto => (
                <option key={producto} value={producto}>
                  {producto}
                </option>
              ))}
            </select>
          </div>
        )}

        {proveedorSeleccionado && productoSeleccionado && (
          <div className="form-group">
            <label>Cantidad:</label>
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value) || 0)}
              min="1"
              className="input-cantidad"
            />
          </div>
        )}

        <div className="error-message {error ? 'show' : ''}">
          {error}
        </div>

        <div className="botones-form">
          {proveedorSeleccionado && productoSeleccionado && cantidad > 0 ? (
            <>
              <button
                onClick={handleAgregarEnvio}
                className="btn-agregar"
              >
                Solicitar Envío
              </button>
              <button
                onClick={handleCancelar}
                className="btn-cancelar"
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              disabled
              className="btn-agregar"
            >
              Solicitar Envío
            </button>
          )}
        </div>
      </div>

      <div className="lista-envios">
        <h3>Envíos Pendientes</h3>
        <div className="tabla-envios">
          <table>
            <thead>
              <tr>
                <th>Proveedor</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {envios.map(envio => (
                <tr key={envio.id}>
                  <td>
                    {proveedores.find(p => p.id === envio.proveedorId)?.nombre || 'Proveedor no encontrado'}
                  </td>
                  <td>{envio.producto}</td>
                  <td>{envio.cantidad}</td>
                  <td>{new Date(envio.fecha).toLocaleDateString()}</td>
                  <td className={`estado-${envio.estado}`}>
                    {envio.estado.replace('_', ' ').toUpperCase()}
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

export default SolicitarEnvios;
