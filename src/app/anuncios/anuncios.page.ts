import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnuncioService } from 'src/services/anuncio.service';
import { Anuncio } from './../../models/anuncio';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.page.html',
  styleUrls: ['./anuncios.page.scss'],
})
export class AnunciosPage implements OnInit, OnDestroy {
  listAnuncios: Anuncio[] = [];
  private anuncioSubscription: Subscription | undefined;
  anuncio: Anuncio | undefined;

  constructor(
    private _anuncioService: AnuncioService,
  ) {}

  ngOnInit(): void {
    this.obtenerAnuncios();
  }

  obtenerAnuncios() {
    this.anuncioSubscription = this._anuncioService.getAnuncios().subscribe({
      next: (data) => {
        console.log(data);
        this.listAnuncios = data;
        this.anuncio = this.listAnuncios[0];  // Ejemplo: asigna el primer producto
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
    if (this.anuncioSubscription) {
      this.anuncioSubscription.unsubscribe();
    }
  }
}





