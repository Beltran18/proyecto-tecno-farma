import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './proveedores.css';
import FormularioProveedor from './FormularioProveedor';
import type { Proveedor } from '../types/proveedor';

interface ProveedoresState {
  showForm: boolean;
  editingProveedor: Proveedor | null;
  proveedores: Proveedor[];
}

const Proveedores: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<ProveedoresState>({
    showForm: false,
    editingProveedor: null,
    proveedores: JSON.parse(localStorage.getItem('proveedores') || '[]')
  });

  const handleAddProveedor = (proveedor: Proveedor) => {
    // Actualizar el estado
    setState(prev => ({
      ...prev,
      proveedores: [...prev.proveedores, proveedor]
    }));
    // Actualizar localStorage usando el nuevo estado
    localStorage.setItem('proveedores', JSON.stringify([...state.proveedores, proveedor]));
  };

  const handleEditProveedor = (proveedor: Proveedor) => {
    setState(prev => ({
      ...prev,
      proveedores: prev.proveedores.map(p =>
        p.id === proveedor.id
          ? proveedor
          : p
      )
    }));
    localStorage.setItem('proveedores', JSON.stringify(state.proveedores));
  };

  const handleDeleteProveedor = (id: number) => {
    setState(prev => ({
      ...prev,
      proveedores: prev.proveedores.filter(p => p.id !== id)
    }));
    localStorage.setItem('proveedores', JSON.stringify(state.proveedores));
  };

  const handleFormClose = () => {
    setState(prev => ({
      ...prev,
      showForm: false,
      editingProveedor: null
    }));
  };

  const handleEditClick = (proveedor: Proveedor) => {
    setState(prev => ({
      ...prev,
      editingProveedor: proveedor,
      showForm: true
    }));
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="proveedores-container">
      <img src="/pildoras-izq.png" className="decoracion izquierda" alt="decoración izquierda" />
      <img src="/pildoras-der.png" className="decoracion derecha" alt="decoración derecha" />

      <div className="boton-regresar">
        <button onClick={handleBack}>
          <span>←</span> Regresar al Dashboard
        </button>
      </div>

      <div className="contenido-proveedores">
        <div className="encabezado-proveedores">
          <h2>Proveedores</h2>
          <div className="iconos">
            <span>🔔</span>
            <span>👤</span>
            <span>⚕️</span>
          </div>
        </div>

        <div className="acciones-proveedores">
          <button className="btn-primary" onClick={() => setState(prev => ({ ...prev, showForm: true }))}>
            <span>➕</span> Añadir Proveedor
          </button>
        </div>

        <div className="tabla-proveedores">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>RF</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Productos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {state.proveedores.map(proveedor => (
                <tr key={proveedor.id}>
                  <td>{proveedor.nombre}</td>
                  <td>{proveedor.rfc}</td>
                  <td>{proveedor.telefono}</td>
                  <td>{proveedor.email}</td>
                  <td>
                    <div className="productos-proveedor">
                      {proveedor.productos.map((producto: string) => (
                        <span key={producto} className="producto-proveedor">
                          {producto}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="acciones">
                      <button className="btn-edit" onClick={() => handleEditClick(proveedor)}>
                        Editar
                      </button>
                      <button className="btn-delete" onClick={() => handleDeleteProveedor(proveedor.id)}>
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {state.showForm && (
          <FormularioProveedor
            onAdd={state.editingProveedor ? handleEditProveedor : handleAddProveedor}
            onClose={handleFormClose}
          />
        )}
      </div>
    </div>
  );
};

export default Proveedores;
