import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private total : number = 0;
  
  private cart: Producto;
  private carts : Producto[];
  constructor(private firestore:AngularFirestore) {
    this.cart = {
      nombre: '',
      precio: 0,
      descripcion: '',
      photo:'',
      cantidad:0
    }
    this.carts = []
    this.getCart().subscribe(res =>{
      this.carts = res;
    });
  }
  public getProduct(): Observable<Producto[]>{
    return this.firestore.collection('products').snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return {id,...data}
        });
      }));
    }
    public getCart(): Observable<Producto[]>{
      return this.firestore.collection('cart').snapshotChanges().pipe(
        map(actions =>{
          return actions.map(a =>{
            const data = a.payload.doc.data() as Producto;
            const id = a.payload.doc.id;
            return {id,...data}
          });
        }));
      }
      public getProductByID(id : string){
        let result = this.firestore.collection('products').doc(id).valueChanges();
        return result;
      }
      public getCartByID(id : string){
        let result = this.firestore.collection('cart').doc(id).valueChanges();
        return result;
      }
      // ? Carrito
      
      private prueba :boolean = false;
      public addCar(id : string,carrito : Producto){
        
        this.carts.forEach((element)=>{
          
          if(element.nombre == carrito.nombre){
            carrito.cantidad=element.cantidad+1;
            this.prueba = true;
            return this.firestore.collection('cart').doc(element.id).update(carrito);
            
          }
        })
        if(this.prueba == false){
        carrito.cantidad+=1;
        return this.firestore.collection('cart').add(carrito);}
      }
      public calcTot(cart:Producto[]):number{
        var element =0
        for (let i = 0; i < cart.length; i++) {
          
          element += (cart[i].precio * cart[i].cantidad);

        }
        return element
      }
      
      
      public restartTotal(id:string, carrito: Producto):number{
        if(carrito.cantidad > 0){
          const rest = (carrito.precio) * (carrito.cantidad);
          this.firestore.collection('cart').doc(id).update(carrito);
          this.total = this.total - (rest);
          return this.total
        }
      }
      public removeCart(id:string, carrito : Producto){
        if(carrito.cantidad > 1){
          carrito.cantidad -=1;
          this.firestore.collection('cart').doc(id).update(carrito);
        }else{
          this.firestore.collection('cart').doc(id).delete();
        }
      }
      
      public addProduct(newProduct: Producto){
        return this.firestore.collection('products').add(newProduct);
      }
      
    }
    