import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './buscarproducto.css';

interface Producto {
  nombre: string;
  tipo: string;
  lote: string;
  fechaVencimiento: string;
}

const BuscarProducto: React.FC = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [lote, setLote] = useState('');
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const tiposFarmaco = ['Tableta', 'Jarabe', 'Crema', 'Inyectable', 'Spray'];

  const handleBuscar = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would make an actual API call to search for products
      const mockProductos: Producto[] = [
        {
          nombre: 'Paracetamol',
          tipo: 'Tableta',
          lote: 'L123456',
          fechaVencimiento: '2026-12-31'
        }
      ].filter(producto => {
        return (
          (!nombre || producto.nombre.toLowerCase().includes(nombre.toLowerCase())) &&
          (!tipo || producto.tipo.toLowerCase().includes(tipo.toLowerCase())) &&
          (!lote || producto.lote.includes(lote))
        );
      });
      
      // Only show one product
      const firstProduct = mockProductos[0];
      setProductos(firstProduct ? [firstProduct] : []);
      setShowResults(true);
    } catch (err) {
      setError('Error al buscar productos');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setShowResults(false);
    setProductos([]);
    setNombre('');
    setTipo('');
    setLote('');
  };

  return (
    <div className="buscar-container">
      <button className="btn-back" onClick={() => navigate('/dashboard')}>
        <span>←</span> Regresar al Dashboard
      </button>
      <div className="header">
        <h2 className="titulo">Buscar Producto</h2>
      </div>

      <div className="main-content">
        <div className="card">
          <div className="card-header">
            <h3>Buscar Producto</h3>
            <p className="card-description">Encuentra productos por nombre, tipo o lote</p>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">Nombre del producto:</label>
              <input 
                type="text" 
                id="nombre"
                className="form-input"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingrese el nombre del producto"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipo" className="form-label">Tipo de Fármaco:</label>
              <select 
                id="tipo"
                className="form-input"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">Seleccione un tipo</option>
                {tiposFarmaco.map(tipo => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="lote" className="form-label">Número de Lote:</label>
              <input 
                type="text" 
                id="lote"
                className="form-input"
                value={lote}
                onChange={(e) => setLote(e.target.value)}
                placeholder="Ingrese el número de lote"
              />
            </div>
            <div className="form-actions">
              <button 
                className="btn-buscar" 
                onClick={handleBuscar}
                data-testid="btn-buscar"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading-spinner">🔍</span> Buscando...
                  </>
                ) : (
                  <>
                    <span>🔍</span> Buscar Producto
                  </>
                )}
              </button>
            </div>
          </div>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          {showResults && (
            <div className="resultados">
              <div className="resultados-header">
                <button className="btn-back" onClick={handleBack}>
                  <span>←</span> Regresar
                </button>
                <h3>Resultados de la búsqueda</h3>
              </div>
              <div className="productos-lista">
                {productos.map((producto, index) => (
                  <div key={index} className="producto-card">
                    <div className="producto-info">
                      <h4>{producto.nombre}</h4>
                      <p>Tipo: {producto.tipo}</p>
                      <p>Lote: {producto.lote}</p>
                      <p>Fecha Vencimiento: {producto.fechaVencimiento}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuscarProducto;
