import React from 'react';
import './buscarproducto.css';

const BuscarProducto: React.FC = () => {
  return (
    <div className="buscar-container">
      <img src="/pildoras-izq.png" alt="decoración izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="decoración derecha" className="decoracion derecha" />

      <div className="header">
        <button className="btn-buscar">🔍 Buscar Producto</button>
        <div className="iconos-superiores">
          <span>❗</span>
          <span>➕</span>
          <span>🔔</span>
          <span>⚕️</span>
        </div>
      </div>

      <h2 className="titulo">Buscar Producto</h2>

      <div className="contenido">
        <div className="calendario">
          <div className="calendario-header"></div>
          <div className="calendario-body">
            <p>Calendario de vencimiento y pedidos programados</p>
            <img src="/caja.png" alt="Caja" className="icono" />
            <button className="btn-calendario">Pedidos programados</button>
            <button className="btn-calendario">Vencimientos</button>
            <input type="date" />
          </div>
        </div>

        <div className="formulario">
          <label>Nombre del producto: _______</label>
          <label>Tipo de Fármaco: _______</label>
          <label>Número de Lote: _______</label>
          <button className="btn-buscar">Buscar Producto</button>
        </div>
      </div>
    </div>
  );
};

export default BuscarProducto;
