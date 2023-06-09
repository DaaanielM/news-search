import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-noticias';

  listNoticias: any[] = [];
  constructor(private _noticiaService: NoticiaService) {}

  buscarNoticias(parametros: any) {
    console.log('Soy el padre y recibo los datos del hijo');
    console.log(parametros);

    this._noticiaService.getNoticias(parametros).subscribe(
      (data) => {
        console.log(data);
        this.listNoticias = data.articles;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
