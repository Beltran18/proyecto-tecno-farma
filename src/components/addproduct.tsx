import React, { useState } from 'react';
import './addproduct.css';
import { useNavigate } from 'react-router-dom';

interface FormState {
  nombre: string;
  categoria: string;
  precio: string;
  stock: string;
  descripcion: string;
  imagen: File | undefined;
}

const AddProduct: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormState>({
    nombre: '',
    categoria: '',
    precio: '',
    stock: '',
    descripcion: '',
    imagen: undefined
  });
  const [error, setError] = useState<string | null>(null);

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
      setFormData(prev => ({
        ...prev,
        imagen: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.categoria || !formData.precio || !formData.stock) {
      setError('Por favor, complete todos los campos obligatorios');
      return;
    }

    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to products list after successful addition
      navigate('/productos');
    } catch (err) {
      setError('Error al añadir el producto');
    }
  };

  return (
    <div className="anadir-container">
      <img src="/pildoras-izq.png" alt="decoración izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="decoración derecha" className="decoracion derecha" />

      <div className="anadir-header">
        <button className="btn-secundario">➕ Añadir producto</button>
        <div className="iconos-superiores">
          <span>🔔</span>
          <span>👤</span>
          <span>⚕️</span>
        </div>
      </div>

      <h2 className="titulo">Añadir Producto</h2>

      <div className="formulario">
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="grupo">
            <label htmlFor="nombre">Nombre del producto:</label>
            <input 
              type="text" 
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grupo">
            <label htmlFor="categoria">Categoría:</label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="medicina">Medicina</option>
              <option value="vitamina">Vitamina</option>
              <option value="suplementos">Suplementos</option>
              <option value="cuidado-personal">Cuidado Personal</option>
            </select>
          </div>
          
          <div className="grupo">
            <label htmlFor="precio">Precio:</label>
            <input 
              type="number" 
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              required
              step="0.01"
            />
          </div>
          
          <div className="grupo">
            <label htmlFor="stock">Stock:</label>
            <input 
              type="number" 
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              min="0"
            />
          </div>
          
          <div className="grupo">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows={4}
            ></textarea>
          </div>
          
          <div className="grupo">
            <label htmlFor="imagen">Imagen del producto:</label>
            <input 
              type="file" 
              id="imagen"
              name="imagen"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-agregar">
              Añadir Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
