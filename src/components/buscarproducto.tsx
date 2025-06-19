import React, { useState } from 'react';
import './buscarproducto.css';

interface Producto {
  nombre: string;
  tipo: string;
  lote: string;
  fechaVencimiento: string;
}

const BuscarProducto: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [lote, setLote] = useState('');
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [productos, setProductos] = useState<Producto[]>([]);

  const handleBuscar = () => {
    // Aquí iría la lógica de búsqueda
    console.log('Buscando productos...', { nombre, tipo, lote });
  };

  const getVencimientoStatus = (fecha: string): 'normal' | 'cerca' | 'vencido' => {
    const hoy = new Date();
    const fechaVencimiento = new Date(fecha);
    const diasRestantes = Math.ceil((fechaVencimiento.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

    if (diasRestantes <= 0) return 'vencido';
    if (diasRestantes <= 30) return 'cerca';
    return 'normal';
  };

  return (
    <div className="buscar-container">
      <img src="/pildoras-izq.png" alt="decoración izquierda" className="decoracion izquierda" />
      <img src="/pildoras-der.png" alt="decoración derecha" className="decoracion derecha" />

      <div className="header">
        <button className="btn-buscar" onClick={handleBuscar}>
          <span>🔍</span> Buscar Producto
        </button>
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
          <div className="calendario-header">Control de Vencimientos</div>
          <div className="calendario-body">
            <p>Calendario de vencimiento y pedidos programados</p>
            <img src="/caja.png" alt="Caja" className="icono" />
            <button className="btn-calendario">Pedidos programados</button>
            <button className="btn-calendario">Vencimientos</button>
            <input 
              type="date" 
              value={fechaSeleccionada}
              onChange={(e) => setFechaSeleccionada(e.target.value)}
            />
          </div>
        </div>

        <div className="formulario">
          <label>
            <span>Nombre del producto:</span>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese el nombre del producto"
            />
          </label>
          <label>
            <span>Tipo de Fármaco:</span>
            <input 
              type="text" 
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              placeholder="Seleccione el tipo de fármaco"
            />
          </label>
          <label>
            <span>Número de Lote:</span>
            <input 
              type="text" 
              value={lote}
              onChange={(e) => setLote(e.target.value)}
              placeholder="Ingrese el número de lote"
            />
          </label>
          <button 
            className="btn-buscar" 
            onClick={handleBuscar}
            data-testid="btn-buscar"
          >
            <span>🔍</span> Buscar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuscarProducto;
