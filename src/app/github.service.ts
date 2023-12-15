import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { anuncio } from '../app/anuncios/anunciomodal';


@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getRepository() {
    // return this.http.get<anuncio[]>('https://mjarancibiasuazo.github.io/api-test-anuncios/api-anuncios.json');
    return this.http.get<anuncio[]>('https://raw.githubusercontent.com/JulioHidalgo/api-test-anuncios/api-anuncios/api-anuncios.json');
    
  }
}

