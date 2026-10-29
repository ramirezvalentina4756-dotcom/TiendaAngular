import { Component } from '@angular/core';
import { Producto } from '../../../../core/models/producto.model';
import { SearchBoxComponent } from '../../../../shared/ui/molecules/search-box/search-box';
import { StockLabelComponent } from '../../../../shared/ui/atoms/stock-label/stock-label';

@Component({
  selector: 'app-productos-page',
  standalone: true,
  imports: [SearchBoxComponent, StockLabelComponent], // <-- Importa el search-box aquí
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.scss',
})
export class ProductosPage {
  categoriaSeleccionada: string = '';
  textoBusqueda: string = ''; // Variable para almacenar el texto ingresado

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Teclado Mecánico RGB',
      precio: 85,
      categoria: 'Periféricos',
      stock: 10,
      marca: 'Logitech',
    },
    {
      id: 2,
      nombre: 'Mouse Inalámbrico Pro',
      precio: 45,
      categoria: 'Periféricos',
      stock: 3,
      marca: 'Razer',
    },
    {
      id: 3,
      nombre: 'Monitor Gamer 27"',
      precio: 320,
      categoria: 'Pantallas',
      stock: 0,
      marca: 'ASUS',
    },
  ];

  get categorias(): string[] {
    return [...new Set(this.productos.map((p) => p.categoria))];
  }

  seleccionarCategoria(cat: string): void {
    this.categoriaSeleccionada = cat;
  }

  // Método que captura el texto enviado por app-search-box
  onBuscar(texto: string): void {
    this.textoBusqueda = texto;
  }

  // Getter que combina el filtro de categoría con el buscador
  get productosFiltrados(): Producto[] {
    return this.productos.filter((p) => {
      const coincideCategoria =
        !this.categoriaSeleccionada || p.categoria === this.categoriaSeleccionada;
      const coincideBusqueda = p.nombre
        .toLowerCase()
        .includes(this.textoBusqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
  }
}

// Información o datos locales de los productos que usará la aplicación mientras no tenga una base de datos real conectada