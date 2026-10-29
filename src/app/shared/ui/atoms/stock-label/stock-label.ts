import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-label',
  standalone: true,
  imports: [],
  templateUrl: './stock-label.html',
  styleUrl: './stock-label.scss'
})
export class StockLabelComponent {
  @Input({ required: true }) stock: number = 0;
}