import React, { useState, useEffect } from 'react';
import './proveedores.css';

interface Proveedor {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  direccion: string;
  productos: string[];
}

const Proveedores: React.FC = () => {
  const [proveedores, setProveedores] = useState<Proveedor[]>(() => 
    JSON.parse(localStorage.getItem('proveedores') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('proveedores', JSON.stringify(proveedores));
  }, [proveedores]);

  const [nuevoProveedor, setNuevoProveedor] = useState<Proveedor>({
    id: proveedores.length + 1,
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    productos: []
  });
  const [proveedorEditando, setProveedorEditando] = useState<Proveedor | null>(null);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState<Proveedor | null>(null);
  const [productosAsignados, setProductosAsignados] = useState<string[]>([]);
  const [nuevoProductoAsignado, setNuevoProductoAsignado] = useState('');

  const handleEditProveedor = (proveedor: Proveedor) => {
    setProveedorEditando(proveedor);
    setNuevoProveedor(proveedor);
  };

  const handleSaveProveedor = () => {
    if (!proveedorEditando) return;

    const nuevosProveedores = proveedores.map((p: Proveedor) =>
      p.id === proveedorEditando.id ? nuevoProveedor : p
    );
    setProveedores(nuevosProveedores);
    setProveedorEditando(null);
    setNuevoProveedor({
      id: proveedores.length + 2,
      nombre: '',
      telefono: '',
      email: '',
      direccion: '',
      productos: []
    });
  };

  const handleCancelEdit = () => {
    setProveedorEditando(null);
    setNuevoProveedor({
      id: proveedores.length + 2,
      nombre: '',
      telefono: '',
      email: '',
      direccion: '',
      productos: []
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoProveedor(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProveedor = () => {
    if (!nuevoProveedor.nombre) return;

    const nuevo = {
      ...nuevoProveedor,
      id: proveedores.length + 1
    };

    setProveedores(prev => [...prev, nuevo]);
    setNuevoProveedor({
      id: proveedores.length + 2,
      nombre: '',
      telefono: '',
      email: '',
      direccion: '',
      productos: []
    });
  };

  const handleDeleteProveedor = (proveedorId: number) => {
    const nuevosProveedores = proveedores.filter((p: Proveedor) => p.id !== proveedorId);
    setProveedores(nuevosProveedores);
    localStorage.setItem('proveedores', JSON.stringify(nuevosProveedores));
  };

  const handleAsignarProducto = () => {
    if (!proveedorSeleccionado || !nuevoProductoAsignado.trim()) return;
    setProductosAsignados(prev => [...prev, nuevoProductoAsignado.trim()]);
    setNuevoProductoAsignado('');
  };

  const handleRemoverProductoAsignado = (index: number) => {
    setProductosAsignados(prev => prev.filter((_, i) => i !== index));
  };

  const handleGuardarAsignaciones = () => {
    if (!proveedorSeleccionado) return;
    
    const proveedorActualizado = {
      ...proveedorSeleccionado,
      productos: productosAsignados
    };

    const nuevosProveedores = proveedores.map(proveedor =>
      proveedor.id === proveedorSeleccionado.id ? proveedorActualizado : proveedor
    );

    setProveedores(nuevosProveedores);
    localStorage.setItem('proveedores', JSON.stringify(nuevosProveedores));
    setProveedorSeleccionado(null);
    setProductosAsignados([]);
  };

  const handleVolver = () => {
    window.location.href = '/dashboard'; // Redirige al dashboard
  };

  return (
    <div className="proveedores-container">
      <div className="header-proveedores">
        <h2>Gestión de Proveedores</h2>
        <button onClick={handleVolver} className="btn-volver">
          Volver al Dashboard
        </button>
      </div>

      <div className="formulario-proveedor">
        <h3>{proveedorEditando ? 'Editar Proveedor' : 'Agregar Nuevo Proveedor'}</h3>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={nuevoProveedor.nombre}
            onChange={handleInputChange}
            placeholder="Nombre del proveedor"
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={nuevoProveedor.telefono}
            onChange={handleInputChange}
            placeholder="Teléfono"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={nuevoProveedor.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={nuevoProveedor.direccion}
            onChange={handleInputChange}
            placeholder="Dirección"
          />
        </div>
        <div className="botones-form">
          {proveedorEditando ? (
            <>
              <button 
                onClick={handleSaveProveedor} 
                className="btn-guardar"
                disabled={!nuevoProveedor.nombre}
              >
                Guardar
              </button>
              <button 
                onClick={handleCancelEdit} 
                className="btn-cancelar"
              >
                Cancelar
              </button>
            </>
          ) : (
            <button 
              onClick={handleAddProveedor} 
              className="btn-agregar"
              disabled={!nuevoProveedor.nombre}
            >
              Agregar Proveedor
            </button>
          )}
        </div>
      </div>

      <div className="lista-proveedores">
        <h3>Lista de Proveedores</h3>
        <div className="tabla-proveedores">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Dirección</th>
                <th>Productos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map((proveedor) => (
                <tr key={proveedor.id}>
                  <td>{proveedor.nombre}</td>
                  <td>{proveedor.telefono}</td>
                  <td>{proveedor.email}</td>
                  <td>{proveedor.direccion}</td>
                  <td className="productos-asignados">
                    <div className="productos-tooltip" title={proveedor.productos.length > 0 ? proveedor.productos.join(', ') : 'Sin productos'}>
                      {proveedor.productos.length > 0 ? proveedor.productos.join(', ') : 'Sin productos'}
                    </div>
                  </td>
                  <td>
                    <div className="acciones-proveedor">
                      <button
                        onClick={() => handleEditProveedor(proveedor)}
                        className="btn-editar"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDeleteProveedor(proveedor.id)}
                        className="btn-eliminar"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="seccion-asignar-productos">
        <h3>Asignar Productos a Proveedores</h3>
        <div className="formulario-asignar-productos">
          <div className="form-group">
            <label>Seleccionar Proveedor:</label>
            <select
              value={proveedorSeleccionado?.id || ''}
              onChange={(e) => {
                const proveedor = proveedores.find(p => p.id === parseInt(e.target.value)) || null;
                setProveedorSeleccionado(proveedor);
                if (proveedor) {
                  setProductosAsignados(proveedor.productos);
                }
              }}
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

          <div className="form-group">
            <label>Asignar Productos:</label>
            <div className="productos-container">
              <div className="productos-input-group">
                <input
                  type="text"
                  value={nuevoProductoAsignado}
                  onChange={(e) => setNuevoProductoAsignado(e.target.value)}
                  placeholder="Ingrese un producto"
                  onKeyDown={(e) => e.key === 'Enter' && handleAsignarProducto()}
                />
                <button
                  type="button"
                  onClick={handleAsignarProducto}
                  className="btn-agregar-producto"
                  disabled={!proveedorSeleccionado}
                >
                  Asignar
                </button>
              </div>
              <div className="productos-lista">
                {productosAsignados.map((producto, index) => (
                  <div key={index} className="producto-item">
                    <span>{producto}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoverProductoAsignado(index)}
                      className="btn-eliminar-producto"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGuardarAsignaciones}
            className="btn-guardar"
            disabled={!proveedorSeleccionado || productosAsignados.length === 0}
          >
            Guardar Asignaciones
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proveedores;
