import React, { useState, useEffect } from 'react';
import './productosdisponibles.css';
import type { Producto } from '../types/producto';
import FormularioProducto from './FormularioProducto';

interface ProductosDisponiblesProps {}

const ProductosDisponibles: React.FC<ProductosDisponiblesProps> = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Producto | undefined>(undefined);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('todas');

  useEffect(() => {
    // Load products from localStorage
    const savedProducts = localStorage.getItem('productos');
    if (savedProducts) {
      const parsedProducts = JSON.parse(savedProducts);
      const validatedProducts = parsedProducts.map((p: any) => ({
        ...p,
        precio: Number(p.precio),
        stock: Number(p.stock)
      }));
      setProductos(validatedProducts);
    } else {
      // Initial mock data
      const initialProducts: Producto[] = [
        {
          id: 1,
          nombre: "Ibuprofeno 400mg",
          descripcion: "Antiinflamatorio y analgésico",
          precio: 15.99,
          stock: 100,
          categoria: "medicamentos"
        },
        {
          id: 2,
          nombre: "Vitamina C 500mg",
          descripcion: "Suplemento vitamínico",
          precio: 29.99,
          stock: 50,
          categoria: "suplementos"
        }
      ];
      setProductos(initialProducts);
      localStorage.setItem('productos', JSON.stringify(initialProducts));
    }
  }, []);

  const productosFiltrados = categoriaSeleccionada === 'todas' ? productos : productos.filter(producto => producto.categoria === categoriaSeleccionada);

  const categorias = [...new Set(productos.map(producto => producto.categoria))];

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = productos.filter(product => product.id !== id);
    setProductos(updatedProducts);
    localStorage.setItem('productos', JSON.stringify(updatedProducts));
  };

  const handleEditClick = (product: Producto) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleAddProduct = () => {
    setShowForm(true);
    setEditingProduct(undefined);
  };

  const handleBack = () => {
    window.location.href = '/dashboard';
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProduct(undefined);
  };

  const handleFormSubmit = (formData: Omit<Producto, 'id'>) => {
    if (editingProduct) {
      // Update existing product
      const updatedProducts = productos.map(product =>
        product.id === editingProduct.id
          ? { ...product, ...formData }
          : product
      );
      setProductos(updatedProducts);
      localStorage.setItem('productos', JSON.stringify(updatedProducts));
    } else {
      // Add new product
      const newProduct: Producto = {
        id: productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1,
        ...formData
      };
      const updatedProducts = [...productos, newProduct];
      setProductos(updatedProducts);
      localStorage.setItem('productos', JSON.stringify(updatedProducts));
    }
    handleFormClose();
  };

  return (
    <div className="productos-container">
      <div className="dashboard-header">
        <h1>Productos Disponibles</h1>
        <div className="filtros">
          <select 
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            className="filtro-categoria"
          >
            <option value="todas">Todas las categorías</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>{categoria}</option>
            ))}
          </select>
          <button className="btn-agregar" onClick={handleAddProduct}>
            Añadir Producto
          </button>
        </div>
      </div>
      <button className="btn-volver" onClick={handleBack}>
        Volver al Dashboard
      </button>

      <div className="productos-grid">
        {productosFiltrados.map((product) => (
          <div key={product.id} className="producto-card">
            <div className="categoria-badge" style={{
              backgroundColor: product.categoria === 'medicamentos' ? '#4CAF50' :
                             product.categoria === 'suplementos' ? '#2196F3' :
                             '#9C27B0'
            }}>
              {product.categoria}
            </div>
            <h2>{product.nombre}</h2>
            <p className="descripcion">{product.descripcion}</p>
            <p className="precio">${product.precio.toFixed(2)}</p>
            <p className="stock">Stock: {product.stock}</p>
            <div className="acciones">
              <button className="btn-edit" onClick={() => handleEditClick(product)}>
                Editar
              </button>
              <button className="btn-delete" onClick={() => handleDeleteProduct(product.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-container">
          <div className="form-modal">
            <button className="btn-close" onClick={handleFormClose}>
              &times;
            </button>
            <div className="form-header">
              <h2>{editingProduct ? 'Editar Producto' : 'Añadir Nuevo Producto'}</h2>
            </div>
            <FormularioProducto
              onSubmit={handleFormSubmit}
              onClose={handleFormClose}
              initialData={editingProduct}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductosDisponibles;
