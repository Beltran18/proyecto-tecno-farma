import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BuscarProducto: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleBuscar = async () => {
    if (!searchTerm.trim()) {
      setError('Por favor, ingrese un término de búsqueda');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const productosStorage = localStorage.getItem('productos');
      if (!productosStorage) {
        throw new Error('No se encontraron productos');
      }

      const productosList = JSON.parse(productosStorage);
      const productosFiltrados = productosList.filter((producto: any) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setProductos(productosFiltrados);
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
    setSearchTerm('');
    navigate('/dashboard');
  };

  const handleBuscarOtro = () => {
    setShowResults(false);
    setProductos([]);
    setSearchTerm('');
  };

  return (
    <div className="buscar-container">


      <div className="main-content">
        <div className="card-header">
          <h3>Buscar Producto</h3>
          <p className="card-description">Encuentra productos por nombre o categoría</p>
        </div>

        <div className="card-body">
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="search" className="form-label">Buscar:</label>
              <div className="input-with-close">
                <input 
                  type="text" 
                  id="search"
                  className="form-input"
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleBuscar()}
                  placeholder="Ingrese el nombre o categoría del producto"
                />
                <button className="btn-close" onClick={handleBack}>
                  <span className="btn-icon">❌</span>
                </button>
              </div>
            </div>

            <button onClick={handleBuscar} className="btn-buscar">
              <span className="btn-icon">🔍</span>
              <span className="btn-text">Buscar</span>
            </button>

            {loading && (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>Buscando productos...</p>
              </div>
            )}

            {error && (
              <div className="error">
                <span className="error-icon">⚠️</span>
                <p>{error}</p>
              </div>
            )}

            {showResults && productos.length === 0 && (
              <div className="no-results">
                <span className="no-results-icon">🔍</span>
                <p>No se encontraron productos</p>
              </div>
            )}

            {showResults && productos.length > 0 && (
              <div className="resultados-container">
                <div className="results-header">
                  <h2>Resultados de búsqueda</h2>
                  <div className="header-actions">
                    <button className="btn-dashboard" onClick={handleBuscarOtro}>
                      <span className="btn-icon">➕</span>
                      <span className="btn-text">Buscar Otro Producto</span>
                    </button>
                  </div>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productos.map((producto) => (
                        <tr key={producto.id}>
                          <td>{producto.nombre}</td>
                          <td>{producto.categoria}</td>
                          <td>${producto.precio.toFixed(2)}</td>
                          <td>{producto.stock}</td>
                          <td>{producto.descripcion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscarProducto;
