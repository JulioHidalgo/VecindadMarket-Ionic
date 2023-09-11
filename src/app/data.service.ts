import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getproduct() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Juguetes',
      image: '../assets/images/photos/photo8.jpg'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Tecnologia',
      image: '../assets/images/photos/photo40.jpg'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Estetica',
      image: '../assets/images/photos/photo13.jpg'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getproductosPrincipales() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Auto Batman Return',
      price: 32000,
      image: '../../assets/images/photos/photo8.jpg'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Set de Maquillaje',
      price: 14990,
      image: '../../assets/images/photos/photo13.jpg'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Notebook HP HP Laptop 15-DY2503LA ',
      price: 53400,
      image: '../../assets/images/photos/photo40.jpg'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Auto Batman Return',
      price: 32000,
      image: '../../assets/images/photos/photo8.jpg'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Set de Maquillaje',
      price: 14990,
      image: '../../assets/images/photos/photo13.jpg'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Notebook HP HP Laptop 15-DY2503LA ',
      price: 53400,
      image: '../../assets/images/photos/photo40.jpg'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
