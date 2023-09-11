import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { product } from '../ventas/productomodal';

@Component({
  selector: 'app-home',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  data!:any|product[]
  constructor (private api:ProductService){}
  ngOnInit(): void {
    this.displayproducts();
      
  }
  displayproducts(){
    this.api.getproduct().subscribe(res=>{
    this.data = res;
    console.log(res);
    })
  }
}
  // public categories = [];
  // public productosPrincipales = [];
  // public bestSellProducts = [];

//   constructor(
//     private data: DataService,
//   ) { }

//   ngOnInit() {
//     this.categories = this.data.getCategories();
//     this.productosPrincipales = this.data.getproductosPrincipales();
//     this.bestSellProducts = this.data.getBestSellProducts();
//   }

// }

