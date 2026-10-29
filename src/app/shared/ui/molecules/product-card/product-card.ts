import { Component, Input } from '@angular/core';
import { Producto } from '../../../../core/models/producto.model';
import { StockLabelComponent } from '../../atoms/stock-label/stock-label';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [StockLabelComponent],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCardComponent {
  // Define el @Input() para que la plantilla reconozca 'producto'
  @Input({ required: true }) producto!: Producto;
}
