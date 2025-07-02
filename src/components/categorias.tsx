import React, { useState } from 'react';
import './dashboard.css';

interface Categoria {
  id: number;
  nombre: string;
  fechaCreacion: string;
}

const Categorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([
    { id: 1, nombre: 'Medicamentos', fechaCreacion: '2025-07-01' },
    { id: 2, nombre: 'Suplementos', fechaCreacion: '2025-07-01' },
  ]);
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const agregarCategoria = () => {
    if (nuevaCategoria.trim()) {
      const nueva = {
        id: categorias.length + 1,
        nombre: nuevaCategoria,
        fechaCreacion: new Date().toISOString().split('T')[0]
      };
      setCategorias([...categorias, nueva]);
      setNuevaCategoria('');
      setMostrarFormulario(false);
    }
  };

  return (
    <div className="panel-control">
      <div className="stat-card">
        <h3>Categorías</h3>
        <button 
          className="btn-secundario"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          <span>➕</span> Nueva Categoría
        </button>

        {mostrarFormulario && (
          <div className="form-categoria">
            <input
              type="text"
              value={nuevaCategoria}
              onChange={(e) => setNuevaCategoria(e.target.value)}
              placeholder="Nombre de la categoría"
              className="input-categoria"
            />
            <div className="botones-form">
              <button className="btn-secundario" onClick={agregarCategoria}>
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

        <div className="lista-categorias">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="categoria-item">
              <span className="categoria-nombre">{categoria.nombre}</span>
              <span className="categoria-fecha">{categoria.fechaCreacion}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorias;
