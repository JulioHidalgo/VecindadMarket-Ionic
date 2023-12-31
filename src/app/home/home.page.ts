import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public productosPrincipales = [];
  public bestSellProducts = [];

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.productosPrincipales = this.data.getproductosPrincipales();
    this.bestSellProducts = this.data.getBestSellProducts();
  }

}
