import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductoService } from 'src/services/producto.service';
import { Producto } from '../../models/producto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit, OnDestroy {
  listProductos: Producto[] = [];
  private productoSubscription: Subscription | undefined;
  producto: Producto | undefined;

  constructor(
    private _productoService: ProductoService,
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoSubscription = this._productoService.getProductos().subscribe({
      next: (data) => {
        console.log(data);
        this.listProductos = data;
        this.producto = this.listProductos[0];  // Ejemplo: asigna el primer producto
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // Lógica para completar si es necesario
      }
    });
  }

  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe({
      next: (data) => {
        this.obtenerProductos();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        // Lógica para completar si es necesario
      }
    });
  }

  ngOnDestroy() {
    if (this.productoSubscription) {
      this.productoSubscription.unsubscribe();
    }
  }
}







/*CODIGO FUNCIONAL */ 
// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
// import { product } from '../ventas/productomodal';

// @Component({
//   selector: 'app-home',
//   templateUrl: './ventas.page.html',
//   styleUrls: ['./ventas.page.scss'],
// })
// export class VentasPage implements OnInit {
//   data!:any|product[]
//   constructor (private api:ProductService){}
//   ngOnInit(): void {
//     this.displayproducts();
      
//   }
//   displayproducts(){
//     this.api.getproduct().subscribe(res=>{
//     this.data = res;
//     console.log(res);
//     })
//   }
// }




// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../product.service';
// import { product } from '../ventas/productomodal';

// @Component({
//   selector: 'app-home',
//   templateUrl: './ventas.page.html',
//   styleUrls: ['./ventas.page.scss'],
// })
// export class VentasPage implements OnInit {
//   data!:any|product[]
//   constructor (private api:ProductService){}
//   ngOnInit(): void {
//     this.displayproducts();
      
//   }
//   displayproducts(){
//     this.api.getproduct().subscribe(res=>{
//     this.data = res;
//     console.log(res);
//     })
//   }
// }
  

