import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.page.html',
  styleUrls: ['./nuevo-producto.page.scss'],
})
export class NuevoProductoPage implements OnInit {

  public producto: Producto;
 

  constructor( private productService: ProductoService) {
    this.producto = {
      nombre: '',
      precio: 0,
      descripcion: '',
      photo: "",
      cantidad: 0
    }
  }

  ngOnInit() {
  }


  public addProduct() {
    this.productService.addProduct(this.producto)

    this.producto = {
      nombre: '',
      precio: 0,
      descripcion: '',
      photo: "",
      cantidad: 0
    }
  }

}
