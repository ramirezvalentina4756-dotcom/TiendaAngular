export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  stock: number;
  marca: string;
}

// Es el contrato o molde que define qué datos debe tener obligatoriamente un producto en TypeScript