import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
/*
  Generated class for the SwapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwapiProvider {

  protected swapiUrl = 'https://swapi.co/api/people/';
  protected giphyUrl = 'https://api.giphy.com/v1/gifs/search';
  protected giphyApiKey = 'mC1I31bn26dUuhDoRDS1PF9QeksY3OA8'; // This is the default/demo public API key.

  constructor(private http: HttpClient) { }

  getCharacter(): Observable<any> {
    const randomNumber: number = Math.floor(Math.random() * 50) + 1  ;
    return this.http.get(this.swapiUrl + randomNumber + '/');
  }

  getCharacterImage(name): Observable<any> {
    const proximityQuery = name + 'StarWars';
    const requestURL = `${this.giphyUrl}?api_key=${this.giphyApiKey}&q=${proximityQuery}`;
    return this.http.get(requestURL);
  }

}
