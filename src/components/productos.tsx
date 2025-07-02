import React, { useState } from 'react';
import './dashboard.css';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  numeroLote: string;
  stockActual: number;
  stockMinimo: number;
  ventasDiarias: number;
  fechaCreacion: string;
}

const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([
    {
      id: 1,
      nombre: 'Paracetamol 500mg',
      categoria: 'Medicamentos',
      numeroLote: 'L123456',
      stockActual: 150,
      stockMinimo: 50,
      ventasDiarias: 15,
      fechaCreacion: '2025-07-01'
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  });

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    categoria: '',
    numeroLote: '',
    stockActual: 0,
    stockMinimo: 0,
    ventasDiarias: 0
  });

  const actualizarCampo = (campo: keyof typeof nuevoProducto, valor: string | number) => {
    setNuevoProducto(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const filtrarProductos = () => {
    const productosFiltrados = productos.filter(producto => {
      const nombreCoincide = producto.nombre.toLowerCase().includes(busqueda.nombre.toLowerCase());
      const categoriaCoincide = !busqueda.categoria || producto.categoria === busqueda.categoria;
      return nombreCoincide && categoriaCoincide;
    });
    setProductos(productosFiltrados);
  };

  const agregarProducto = () => {
    // Validar que todos los campos requeridos estén llenos
    if (!nuevoProducto.nombre || !nuevoProducto.categoria || !nuevoProducto.numeroLote || 
        nuevoProducto.stockActual <= 0 || nuevoProducto.stockMinimo <= 0 || 
        nuevoProducto.ventasDiarias < 0) {
      alert('Por favor, complete todos los campos requeridos');
      return;
    }

    // Validar que el stock actual sea mayor al stock mínimo
    if (nuevoProducto.stockActual < nuevoProducto.stockMinimo) {
      alert('El stock actual debe ser mayor o igual al stock mínimo');
      return;
    }

    // Crear el nuevo producto
    const nuevo = {
      id: productos.length + 1,
      ...nuevoProducto,
      fechaCreacion: new Date().toISOString().split('T')[0]
    };

    // Actualizar el estado
    setProductos(prev => [...prev, nuevo]);
    setNuevoProducto({
      nombre: '',
      categoria: '',
      numeroLote: '',
      stockActual: 0,
      stockMinimo: 0,
      ventasDiarias: 0
    });
    setMostrarFormulario(false);

    // Mostrar mensaje de éxito
    alert('Producto agregado exitosamente');
  };

  return (
    <div className="panel-control">
      <div className="stat-card">
        <h3>Productos</h3>
        <button 
          className="btn-secundario"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          <span>➕</span> Nuevo Producto
        </button>

        {mostrarFormulario && (
          <div className="form-producto">
            <h4 className="form-title">Nuevo Producto</h4>
          </div>
        )}

        <div className="busqueda-productos">
          <div className="busqueda-grupo">
            <input
              type="text"
              value={busqueda.nombre}
              onChange={(e) => {
                setBusqueda(prev => ({ ...prev, nombre: e.target.value }));
                filtrarProductos();
              }}
              placeholder="Buscar por nombre..."
              className="input-busqueda"
            />
          </div>
          <div className="busqueda-grupo">
            <select
              value={busqueda.categoria}
              onChange={(e) => {
                setBusqueda(prev => ({ ...prev, categoria: e.target.value }));
                filtrarProductos();
              }}
              className="input-busqueda"
            >
              <option value="">Todas las categorías</option>
              <option value="Medicamentos">Medicamentos</option>
              <option value="Suplementos">Suplementos</option>
              <option value="Higiene">Higiene</option>
            </select>
          </div>
        </div>

        {mostrarFormulario && (
          <div className="form-producto">
            <h4 className="form-title">Nuevo Producto</h4>
            <div className="form-group">
              <label htmlFor="nombre">Nombre del Producto</label>
              <input
                id="nombre"
                type="text"
                value={nuevoProducto.nombre}
                onChange={(e) => actualizarCampo('nombre', e.target.value)}
                className="input-categoria"
                placeholder="Ingrese el nombre del producto"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoria">Categoría</label>
              <select
                id="categoria"
                value={nuevoProducto.categoria}
                onChange={(e) => actualizarCampo('categoria', e.target.value)}
                className="input-categoria"
                required
              >
                <option value="">Selecciona una categoría</option>
                <option value="Medicamentos">Medicamentos</option>
                <option value="Suplementos">Suplementos</option>
                <option value="Higiene">Higiene</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="lote">Número de Lote</label>
              <input
                id="lote"
                type="text"
                value={nuevoProducto.numeroLote}
                onChange={(e) => actualizarCampo('numeroLote', e.target.value)}
                className="input-categoria"
                placeholder="Ingrese el número de lote"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="stockActual">Stock Actual</label>
              <input
                id="stockActual"
                type="number"
                value={nuevoProducto.stockActual}
                onChange={(e) => actualizarCampo('stockActual', parseInt(e.target.value))}
                className="input-categoria"
                placeholder="Ingrese el stock actual"
                required
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="stockMinimo">Stock Mínimo</label>
              <input
                id="stockMinimo"
                type="number"
                value={nuevoProducto.stockMinimo}
                onChange={(e) => actualizarCampo('stockMinimo', parseInt(e.target.value))}
                className="input-categoria"
                placeholder="Ingrese el stock mínimo"
                required
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="ventas">Ventas Diarias</label>
              <input
                id="ventas"
                type="number"
                value={nuevoProducto.ventasDiarias}
                onChange={(e) => actualizarCampo('ventasDiarias', parseInt(e.target.value))}
                className="input-categoria"
                placeholder="Ingrese las ventas diarias"
                required
                min="0"
              />
            </div>

            <div className="botones-form">
              <button 
                className="btn-secundario guardar-btn"
                onClick={agregarProducto}
                disabled={!nuevoProducto.nombre || !nuevoProducto.categoria || 
                         !nuevoProducto.numeroLote || nuevoProducto.stockActual <= 0 ||
                         nuevoProducto.stockMinimo <= 0 || nuevoProducto.ventasDiarias < 0}
              >
                <span>💾</span> Guardar
              </button>
              <button 
                className="btn-secundario"
                onClick={() => setMostrarFormulario(false)}
              >
                <span>❌</span> Cancelar
              </button>
            </div>
          </div>
        )}

        <div className="lista-productos">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-item">
              <div className="producto-detalle">
                <span className="producto-nombre">{producto.nombre}</span>
                <span className="producto-categoria">{producto.categoria}</span>
                <span className="producto-lote">Lote: {producto.numeroLote}</span>
              </div>
              <div className="producto-stock">
                <span>Stock: {producto.stockActual}</span>
                <span>Stock Mínimo: {producto.stockMinimo}</span>
              </div>
              <div className="producto-ventas">
                <span>Ventas Diarias: {producto.ventasDiarias}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
