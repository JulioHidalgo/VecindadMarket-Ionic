import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../app/ventas/productomodal';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Define la parte fija de la URL
  private apiUrl = 'mongodb+srv://aukan:admin123@cluster0.vwvgqkq.mongodb.net/meanproductos'; // Reemplaza con la URL de tu servidor de backend

  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    const endpoint = `${this.apiUrl}/meanproductos`; // Construye la URL completa
    return this.http.get<product[]>(endpoint);
  }
}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
// import { product } from '../app/ventas/productomodal';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   API_URL = 'mongodb+srv://aukan:admin123@cluster0.vwvgqkq.mongodb.net/';
//   constructor(private http: HttpClient) { }

//   getproduct(){
//     return this.http.get<product[]>("mongodb+srv://aukan:admin123@cluster0.vwvgqkq.mongodb.net/meanproductos")
//   } 
// }


/* PRODUCTOS DUMMY */ 

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
// import { product } from '../app/ventas/productomodal';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   API_URL = 'https://swapi.dev/api/people/1';
//   constructor(private http: HttpClient) { }

//   getproduct(){
//     return this.http.get<product[]>("https://dummyjson.com/products")
//   } 
// }