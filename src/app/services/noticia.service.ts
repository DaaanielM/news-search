import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  // private http: HttpClient; es una propiedad de la clase NoticiaService que va a recibir el objeto HttpClient por medio del constructor
  constructor(private http: HttpClient) {}

  // Observable<any> es el tipo de dato que va a retornar el método de la petición http

  getNoticias(parametros: any): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines?country=' +
      parametros.pais +
      '&category=' +
      parametros.categoria +
      '&apiKey=be8aca82a8cc4f0891fc2577de62d93e';
    return this.http.get(URL);
  }
}
