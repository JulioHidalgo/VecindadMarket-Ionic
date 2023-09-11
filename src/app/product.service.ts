import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { product } from '../app/ventas/productomodal';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = 'https://swapi.dev/api/people/1';
  constructor(private http: HttpClient) { }

  getproduct(){
    return this.http.get<product[]>("https://dummyjson.com/products")
  } 
}