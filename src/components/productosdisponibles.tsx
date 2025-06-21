import React, { useState, useEffect } from 'react';
import './productosdisponibles.css';
import type { Producto } from '../types/producto';
import FormularioProducto from './FormularioProducto';

interface ProductosDisponiblesProps {}

const ProductosDisponibles: React.FC<ProductosDisponiblesProps> = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Producto | undefined>(undefined);
  const [productos, setProductos] = useState<Producto[]>([]);

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
        <button className="btn-agregar" onClick={handleAddProduct}>
          Añadir Producto
        </button>
      </div>

      <div className="productos-grid">
        {productos.map((product) => (
          <div key={product.id} className="producto-card">
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
