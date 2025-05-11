import React from 'react';
import './addproduct.css';

const AddProduct: React.FC = () => {
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
        <div className="grupo">
          <label>Nombre del producto:</label>
          <input type="text" />
        </div>
        <div className="grupo">
          <label>Categoría:</label>
          <select>
            <option value="">Selecciona una categoría</option>
            <option value="medicina">Medicina</option>
            <option value="vitamina">Vitamina</option>
          </select>
        </div>
        <div className="grupo">
          <label>Precio:</label>
          <input type="number" />
        </div>
        <div className="grupo">
          <label>Número de lote:</label>
          <input type="text" />
        </div>
        <div className="grupo">
          <label>Fecha de vencimiento:</label>
          <input type="date" />
        </div>
        <button className="btn-agregar">Agregar</button>
      </div>
    </div>
  );
};

export default AddProduct;
