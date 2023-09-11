import { Component } from '@angular/core';
import { GithubService } from '../github.service';
import { anuncio } from '../anuncios/anunciomodal'

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.page.html',
  styleUrls: ['./anuncios.page.scss'],
})

export class AnunciosPage {
  data!:any|anuncio[]
    GithubService: any;
    constructor(private api: GithubService) {}
  
    ngOnInit(): void {
      this.displayAnuncios();
    }
    displayAnuncios(){
      this.api.getRepository().subscribe(res => {
        this.data = res;
        console.log(res); 
      });
    }
  }
