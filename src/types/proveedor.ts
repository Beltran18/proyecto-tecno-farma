export interface Proveedor {
  id: number;
  nombre: string;
  rfc: string;
  direccion: string;
  telefono: string;
  email: string;
  productos: string[]; // IDs de los productos que distribuye
}

export interface ProveedorFormData {
  nombre: string;
  rfc: string;
  direccion: string;
  telefono: string;
  email: string;
  productos: string[];
}
