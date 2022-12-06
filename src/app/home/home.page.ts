import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products: Producto[];
  public cart : Producto;
  constructor(private productoService: ProductoService, private router: Router) {
    this.cart = {
        nombre: '',
        precio: 0,
        descripcion: '',
        photo:'',
        cantidad:0
    }
    this.productoService.getProduct().subscribe(res =>{
      this.products = res;
    });
  }

  public getProductById(id: string) {
    this.router.navigate(
      ['/producto'],
      {
        queryParams: { id: id }
      }
    );
  }
  public addCar(id: string,car : Producto) {
    this.cart.nombre = car.nombre;
    this.cart.descripcion = car.descripcion;
    this.cart.photo = car.photo;
    this.cart.precio = car.precio;
    this.cart.cantidad = car.cantidad;
    this.productoService.addCar(id,this.cart);
    
    
  }

  public goCar() {
    this.router.navigate(['/carrito']);
  }

  public goNewProduct(){
    this.router.navigate(['/nuevo-producto']);
  }

}
