// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AnuncioService } from 'src/services/anuncio.service';
// import { Anuncio } from '../../models/anuncio';
// import { Subscription } from 'rxjs';

// @Component({
// selector: 'app-anuncios',
// templateUrl: './anuncios.page.html',
// styleUrls: ['./anuncios.page.scss'],
// })
// export class AnunciosPage implements OnInit, OnDestroy {
//   listAnuncios: Anuncio[] = [];
//   private anuncioSubscription: Subscription | undefined;
//   anuncio: Anuncio | undefined;

//   constructor(
//     private _anuncioService: AnuncioService,
//   ) {}

//   ngOnInit(): void {
//     this.obtenerAnuncios();
//   }

//   obtenerAnuncios() {
//     this.anuncioSubscription = this._anuncioService.getAnuncios().subscribe({
//       next: (data) => {
//         console.log(data);
//         this.listAnuncios = data;
//         this.anuncio = this.listAnuncios[0];  // Ejemplo: asigna el primer anuncio
//       },
//       error: (error) => {
//         console.log(error);
//       },
//       complete: () => {
//         // Lógica para completar si es necesario
//       }
//     });
//   }

//   eliminarAnuncio(id: any) {
//     this._anuncioService.eliminarAnuncio(id).subscribe({
//       next: (data) => {
//         this.obtenerAnuncios();
//       },
//       error: (error) => {
//         console.log(error);
//       },
//       complete: () => {
//         // Lógica para completar si es necesario
//       }
//     });
//   }


//   ngOnDestroy() {
//     if (this.anuncioSubscription) {
//       this.anuncioSubscription.unsubscribe();
//     }
//   }
// }


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
