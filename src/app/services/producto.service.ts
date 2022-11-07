import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private total : number = 0;
  private producto: Producto[];
  private carrito:Producto[] = [];
  constructor() {
    this.producto = [
      {
        id: '1',
        nombre: 'Jabón',
        precio: 15,
        descripcion: 'Jabón neutro',
        photo:"https://picsum.photos/400/?random=1",
        cantidad:0
      },
      {
        id: '2',
        nombre: 'T.V',
        precio: 15000,
        descripcion: 'Televisón multimedia',
        photo:"https://picsum.photos/400/?random=2",
        cantidad:0
      },
      {
        id: '3',
        nombre: 'Mouse',
        precio: 400,
        descripcion: 'Mouse especializado a oficina',
        photo:"https://picsum.photos/400/?random=3",
        cantidad:0
      },
    ]
  }
  public getProduct(): Producto[]{
    return this.producto;
  }
  public getProductByID(id:string):Producto{
    let item: Producto;
    item = this.producto.find((producto)=>{
      return producto.id===id;
    });
    return item;
  }
  // ? Carrito


  public addCar(pos:number){
    pos =pos-1;
    if(!(this.carrito.includes(this.producto[pos]))){
      this.carrito.push(this.producto[pos]);
      let index = this.carrito.findIndex(array => array.nombre === this.producto[pos].nombre);
      this.carrito[index].cantidad+=1;
      console.log('producto ' + this.carrito[index].nombre+ ' Cantidad ' + this.carrito[index].cantidad);
      this.total += this.carrito[index].precio; 
    }else{
      let index = this.carrito.findIndex(array => array.nombre === this.producto[pos].nombre);
      this.carrito[index].cantidad+=1;
      console.log('producto ' + this.carrito[index].nombre+ ' Cantidad ' + this.carrito[index].cantidad);
      this.total += this.carrito[index].precio; 
    }
  }

  public getTotal():number{
    return this.total;
  }
  public restartTotal(res:number):number{
    console.log("Posición: "+ res)
    if(this.carrito.length > 0){
      return (this.total = this.total - ((this.carrito[res].precio) * (this.carrito[res].cantidad)));
    }else{
      return this.total = 0;
    }
  }
  public getCar(): Producto[]{
    return this.carrito;
  }
  public removeCart(pos:number){
    this.carrito.splice(pos, 1)
  }

  public addProduct(newProduct: Producto){
    this.producto.push(newProduct);
  }

}
