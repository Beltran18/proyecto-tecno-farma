import React, { useState } from 'react';
import type { Producto } from '../types/producto';
import './FormularioProducto.css';

interface FormularioProductoProps {
  onSubmit: (formData: Omit<Producto, 'id'>) => void;
  onClose: () => void;
  initialData?: Producto;
}

const FormularioProducto: React.FC<FormularioProductoProps> = ({ onSubmit, onClose, initialData }) => {
  const [formData, setFormData] = useState<Omit<Producto, 'id'>>({
    nombre: initialData?.nombre || '',
    descripcion: initialData?.descripcion || '',
    precio: initialData?.precio || 0,
    stock: initialData?.stock || 0,
    categoria: initialData?.categoria || '',
    imagen: initialData?.imagen || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, imagen: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      precio: Number(formData.precio),
      stock: Number(formData.stock)
    });
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-section">
          <div className="form-grid">
            <div className="form-column">
              <div className="form-group">
                <label>Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Categoría *</label>
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione una categoría</option>
                  <option value="medicamentos">Medicamentos</option>
                  <option value="suplementos">Suplementos</option>
                  <option value="cosmeticos">Cosméticos</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div className="form-group">
                <label>Precio *</label>
                <div className="input-wrapper">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label>Descripción</label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
              <div className="form-group">
                <label>Stock *</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  min="0"
                />
              </div>
              <div className="form-group">
                <label>Imagen</label>
                <input
                  type="file"
                  name="imagen"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Guardar
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioProducto;
