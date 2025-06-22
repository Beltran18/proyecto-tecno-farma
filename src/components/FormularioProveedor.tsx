import React, { useState } from 'react';
import type { Proveedor } from '../types/proveedor';
import './formulario.css';

interface FormularioProveedorProps {
  onAdd: (proveedor: Proveedor) => void;
  onClose: () => void;
}

const FormularioProveedor: React.FC<FormularioProveedorProps> = ({ onAdd, onClose }) => {
  interface FormularioData {
    nombre: string;
    direccion: string;
    telefono: string;
    email: string;
    productos: string[];
  }

  const [formData, setFormData] = useState<FormularioData>({
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    productos: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Separar productos por comas y espacios
    const productos = value.split(/[, ]+/).filter(Boolean);
    setFormData(prev => ({
      ...prev,
      productos
    }));
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const proveedor: Proveedor = {
      id: Date.now(),
      ...formData,
      rfc: '' // Agregando un RFC vacío para mantener la interfaz
    };
    onAdd(proveedor);
    onClose();
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit} className="formulario">
        <h2>Añadir Proveedor</h2>
        
        <div className="form-group">
          <label htmlFor="nombre">Nombre del Proveedor</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Productos que distribuye</label>
          <input
            type="text"
            placeholder="Escribe los productos separados por comas"
            onChange={handleProductoChange}
            value={formData.productos.join(', ')}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">Guardar</button>
          <button type="button" onClick={onClose} className="btn-secondary">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioProveedor;
