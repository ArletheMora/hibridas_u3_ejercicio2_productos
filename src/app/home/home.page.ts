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
  private carrito:Producto[];
  public products: Producto[];

  constructor(private productoService: ProductoService, private router: Router) {
    this.products = this.productoService.getProduct();
  }

  public getProductById(id: number) {
    this.router.navigate(['/producto'], {
      queryParams: {id:id}
    });
  }
  public addCar(pos:number){
    this.carrito.push(this.products[pos]);  
  }

}
