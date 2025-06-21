import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './buscarproducto.css';
import type { Producto } from '../types/producto';

const BuscarProducto: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleBuscar = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would make an actual API call to search for products
      const mockProductos: Producto[] = [
        {
          id: 1,
          nombre: 'Paracetamol',
          categoria: 'medicina',
          precio: 15.99,
          stock: 100,
          descripcion: 'Analgesico y antipiretico',
          imagen: '/paracetamol.jpg'
        },
        {
          id: 2,
          nombre: 'Ibuprofeno',
          categoria: 'medicina',
          precio: 12.99,
          stock: 50,
          descripcion: 'Antiinflamatorio y analgesico',
          imagen: '/ibuprofeno.jpg'
        }
      ].filter(producto => {
        return producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
               producto.categoria.toLowerCase().includes(searchTerm.toLowerCase());
      });
      
      setProductos(mockProductos);
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
            <p className="card-description">Encuentra productos por nombre o categoría</p>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="search" className="form-label">Buscar:</label>
              <input 
                type="text" 
                id="search"
                className="form-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ingrese nombre o categoría del producto"
              />
            </div>

            {loading ? (
              <div className="loading">Buscando...</div>
            ) : (
              <button 
                className="btn-buscar" 
                onClick={handleBuscar}
                disabled={!searchTerm}
              >
                Buscar
              </button>
            )}

            {error && <div className="error-message">{error}</div>}

            {showResults && productos.length > 0 && (
              <div className="resultados">
                <h4>Productos encontrados:</h4>
                <div className="productos-lista">
                  {productos.map(producto => (
                    <div key={producto.id} className="producto-card">
                      <div className="producto-info">
                        <h4>{producto.nombre}</h4>
                        <p>Categoría: {producto.categoria}</p>
                        <p>Precio: ${producto.precio.toFixed(2)}</p>
                        <p>Stock: {producto.stock}</p>
                        <p>{producto.descripcion}</p>
                      </div>
                    </div>
                  ))}
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
