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

  producto: Producto

  constructor(
    private activateRoute: ActivatedRoute,
    private productoService: ProductoService
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap =>{
      const responseID = paramMap.get('id');
      this.producto = this.productoService.getProductByID(responseID);
      console.log(this.producto)
    });
  }

}
