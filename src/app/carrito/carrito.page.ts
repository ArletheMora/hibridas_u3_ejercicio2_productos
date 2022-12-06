import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  public car : Producto[]=[];
  public total: number;

  constructor(private productoService:ProductoService) { 
    this.productoService.getCart().subscribe(res =>{
      this.car = res;
      this.total = this.productoService.calcTot(this.car);
    });
    
    
  }
  ngOnInit() {
    this.total = this.productoService.calcTot(this.car);
  }
  public removeCart(car : Producto,id:string){
    
    if(this.productoService.getProduct.length > 0){
      this.total = this.productoService.restartTotal(id,car);
    }else{  
      this.total=0;
    }
    this.productoService.removeCart(id, car);
  }
}
