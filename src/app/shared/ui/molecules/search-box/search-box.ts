/**
 * JUSTIFICACIÓN ATOMIC DESIGN:
 * Este componente es una MOLÉCULA porque combina más de un elemento básico o átomo
 * (un campo de entrada <input> junto con eventos de entrada y su lógica de emisión)
 * para formar una unidad funcional reutilizable dentro de la interfaz.
 */
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.html',
  styleUrl: './search-box.scss'
})
export class SearchBoxComponent {
  @Output() buscar = new EventEmitter<string>();

  onInput(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.buscar.emit(valor);
  }
}