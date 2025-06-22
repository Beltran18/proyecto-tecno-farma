export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
  imagen?: string;
  lote: string;
  fechaVencimiento: string;
}

export interface ProductoFormData {
  nombre: string;
  descripcion: string;
  precio: string;
  stock: string;
  categoria: string;
  imagen?: File;
  lote: string;
  fechaVencimiento: string;
}
