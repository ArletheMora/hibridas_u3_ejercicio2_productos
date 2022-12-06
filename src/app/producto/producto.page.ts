import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  
  producto: Producto;
  
  constructor(
    private activateRoute: ActivatedRoute,
    private productoService: ProductoService
    ) { 
      this.producto ={
        nombre: '',
        precio: 0,
        descripcion: '',
        photo:"",
        cantidad:0
      }
      this.activateRoute.queryParams.subscribe((params) => {
        this.productoService.getProductByID(params.id).subscribe(item =>{
          this.producto = item as Producto;
        });
      });
    }
    
    ngOnInit() {
      
      
    }
    
  }
  