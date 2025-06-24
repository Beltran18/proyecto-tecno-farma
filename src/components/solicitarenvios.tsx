import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './solicitarEnvios.css';

interface Pedido {
  id: number;
  proveedor: string;
  productos: { nombre: string; cantidad: number }[];
  fecha: string;
  estado: 'pendiente' | 'en proceso' | 'completado';
}

interface PedidoEditState {
  id: number | null;
  proveedor: string;
  productos: { nombre: string; cantidad: number }[];
}

const SolicitarEnvios: React.FC = () => {
  const navigate = useNavigate();
  const [proveedores, setProveedores] = useState<any[]>([]);
  const [productos, setProductos] = useState<any[]>([]);
  const [selectedProveedor, setSelectedProveedor] = useState<string>('');
  const [selectedProductos, setSelectedProductos] = useState<{ nombre: string; cantidad: number }[]>([]);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [editingPedido, setEditingPedido] = useState<PedidoEditState | null>(null);
  const [searchId, setSearchId] = useState<string>('');

  useEffect(() => {
    const savedProveedores = JSON.parse(localStorage.getItem('proveedores') || '[]');
    setProveedores(savedProveedores);

    const savedProductos = JSON.parse(localStorage.getItem('productos') || '[]');
    setProductos(savedProductos);

    const savedPedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    setPedidos(savedPedidos);
  }, []);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleProveedorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProveedor(e.target.value);
  };

  const handleProductoAdd = (producto: any) => {
    const existing = selectedProductos.find(p => p.nombre === producto.nombre);
    if (existing) {
      const updated = selectedProductos.map(p => 
        p.nombre === producto.nombre ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setSelectedProductos(updated);
    } else {
      setSelectedProductos([...selectedProductos, { nombre: producto.nombre, cantidad: 1 }]);
    }
  };

  const handleProductoRemove = (productoNombre: string) => {
    setSelectedProductos(selectedProductos.filter(p => p.nombre !== productoNombre));
  };

  const handlePedidoSubmit = () => {
    if (!selectedProveedor || selectedProductos.length === 0) return;

    const nuevoPedido: Pedido = {
      id: pedidos.length + 1,
      proveedor: selectedProveedor,
      productos: [...selectedProductos],
      fecha: new Date().toISOString(),
      estado: 'pendiente'
    };

    setPedidos(prev => [...prev, nuevoPedido]);
    localStorage.setItem('pedidos', JSON.stringify([...pedidos, nuevoPedido]));

    setSelectedProveedor('');
    setSelectedProductos([]);
  };

  const handleEditPedido = (pedido: Pedido) => {
    setEditingPedido({
      id: pedido.id,
      proveedor: pedido.proveedor,
      productos: pedido.productos
    });
    setSelectedProveedor(pedido.proveedor);
    setSelectedProductos(pedido.productos);
  };

  const handleUpdatePedido = () => {
    if (!editingPedido) return;

    const updatedPedidos = pedidos.map(p =>
      p.id === editingPedido.id
        ? {
            ...p,
            proveedor: selectedProveedor,
            productos: selectedProductos
          }
        : p
    );

    setPedidos(updatedPedidos);
    localStorage.setItem('pedidos', JSON.stringify(updatedPedidos));
    setEditingPedido(null);
    setSelectedProveedor('');
    setSelectedProductos([]);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchId(e.target.value);
  };

  const filteredPedidos = searchId
    ? pedidos.filter(p => p.id.toString() === searchId)
    : pedidos;

  return (
    <div className="solicitar-envios-container">
      <div className="boton-regresar">
        <button onClick={handleBack}>
          <span>←</span> Regresar al Dashboard
        </button>
      </div>

      <div className="contenido-solicitar-envios">
        <h1>Solicitar Envíos</h1>

        <div className="formulario-solicitud">
          <div className="seccion-form">
            <label htmlFor="proveedor">Proveedor:</label>
            <select
              id="proveedor"
              value={selectedProveedor}
              onChange={handleProveedorChange}
              className="input-select"
            >
              <option value="">Selecciona un proveedor</option>
              {proveedores.map(proveedor => (
                <option key={proveedor.id} value={proveedor.nombre}>
                  {proveedor.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="seccion-form">
            <label>Productos:</label>
            <div className="productos-seleccionados">
              {selectedProductos.map((producto, index) => (
                <div key={index} className="producto-seleccionado">
                  <span>{producto.nombre} (x{producto.cantidad})</span>
                  <button
                    onClick={() => handleProductoRemove(producto.nombre)}
                    className="btn-remove"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
            <div className="contenedor-productos">
              {productos.map(producto => (
                <button
                  key={producto.id}
                  onClick={() => handleProductoAdd(producto)}
                  className="btn-producto"
                >
                  {producto.nombre}
                </button>
              ))}
            </div>
          </div>

          <div className="acciones-form">
            {editingPedido ? (
              <>
                <button
                  onClick={handleUpdatePedido}
                  className="btn-enviar"
                  disabled={!selectedProveedor || selectedProductos.length === 0}
                >
                  Actualizar Pedido
                </button>
                <button
                  onClick={() => {
                    setEditingPedido(null);
                    setSelectedProveedor('');
                    setSelectedProductos([]);
                  }}
                  className="btn-cancelar"
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                onClick={handlePedidoSubmit}
                className="btn-enviar"
                disabled={!selectedProveedor || selectedProductos.length === 0}
              >
                Solicitar Pedido
              </button>
            )}
          </div>
        </div>

        <div className="tabla-pedidos">
          <h2>Historial de Pedidos</h2>
          <div className="buscador">
            <input
              type="text"
              placeholder="Buscar por ID de pedido..."
              value={searchId}
              onChange={handleSearchChange}
              className="input-buscar"
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Proveedor</th>
                <th>Productos</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredPedidos.map((pedido: Pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.id}</td>
                  <td>{pedido.proveedor}</td>
                  <td>
                    {pedido.productos.map((prod: { nombre: string; cantidad: number }, index: number) => (
                      <span key={index}>
                        {prod.nombre} (x{prod.cantidad})
                        {index < pedido.productos.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </td>
                  <td>{new Date(pedido.fecha).toLocaleDateString()}</td>
                  <td>{pedido.estado}</td>
                  <td>
                    <button
                      onClick={() => handleEditPedido(pedido)}
                      className="btn-editar"
                    >
                      📝
                    </button>
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
