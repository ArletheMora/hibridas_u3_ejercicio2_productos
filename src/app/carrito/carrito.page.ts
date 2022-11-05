import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  public car : Producto[];
  public total: number = 0;

  constructor(private productoService:ProductoService) { 
    this.car = this.productoService.getCar();
    this.total = this.productoService.getTotal();
  }
  ngOnInit() {
  }

}
