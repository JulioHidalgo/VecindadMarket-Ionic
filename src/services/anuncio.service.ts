import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  url = 'http://localhost:4000/api/anuncios/';

  constructor(private http: HttpClient) { }

  getAnuncios(): Observable<any> {
    return this.http.get(this.url);
  }
}