import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private producto: Producto[];
  private carrito:Producto[];
  constructor() {
    this.producto = [
      {
        id: 1,
        nombre: 'Jabón',
        precio: 15,
        descripcion: 'Jabón neutro',
        photo:"https://picsum.photos/100/?random=1"
      },
      {
        id: 2,
        nombre: 'T.V',
        precio: 15000,
        descripcion: 'Televisón multimedia',
        photo:"https://picsum.photos/100/?random=2"
      },
      {
        id: 3,
        nombre: 'Mouse',
        precio: 400,
        descripcion: 'Mouse especializado a oficina',
        photo:"https://picsum.photos/100/?random=3"
      },
    ]
  }
  public getProduct(): Producto[]{
    return this.producto;
  }
  public getProductByID(id:number):Producto{
    let item: Producto;
    item = this.producto.find((producto)=>{
      return producto.id===id;
    });
    return item;
  }
  public addCar(pos:number){
    this.carrito.push(this.producto[pos]);  
  }
  public removeCar(pos:number){
    this.carrito.splice(pos, 1)
  }
}
