import { Component } from '@angular/core';
import { ProductosPage } from './features/productos/pages/productos-page/productos-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductosPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'coliBro-frontend';
}