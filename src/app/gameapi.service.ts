import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameapiService {
  

  API_KEY = '0e5c263be7a96b8df205c354017ca71730b176c5';
  baseUrl = 'https://www.giantbomb.com/api'
  

  constructor(private http: HttpClient) { }


  getGame() {
    const api = `${this.baseUrl}/platforms/?api_key=${this.API_KEY}&format=json&field_list=name,image`;
    return this.http.get(api);
  }
  
  getGameList(id: number) {
    const api = `${this.baseUrl}/games/?api_key=${this.API_KEY}&format=json&fields=${id}`;
    return this.http.get(api);
  }

  // search(terms: Observable<string>) {
  //   return terms.subscribe(term => this.searchEntries(term));
  // }

  search(terms: Observable<string>) {
    return terms.pipe(debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term) {
    const api = `${this.baseUrl}/search/?api_key=${this.API_KEY}&format=json&query=${term}&resources=game`;
    return this.http.get(api);
  }

  

  getName() {
    const api = 'https://www.giantbomb.com/api/platforms/?api_key=0e5c263be7a96b8df205c354017ca71730b176c5&format=json&field_list=name,image';
    return this.http.get(api);
    }

    getCharacters() {
      const api = 'https://www.giantbomb.com/api/characters/?api_key=0e5c263be7a96b8df205c354017ca71730b176c5&format=json&field_list=name'
      return this.http.get(api);
    }

    getPlatform() {
      const api = 'https://www.giantbomb.com/api/platforms/?api_key=0e5c263be7a96b8df205c354017ca71730b176c5&format=json&field_list=name'
      return this.http.get(api);
    }

    getRating() {
      const api = 'https://www.giantbomb.com/api/game_ratings/?api_key=0e5c263be7a96b8df205c354017ca71730b176c5&format=json&field_list=name'
      return this.http.get(api);
    }

    getReviews(score: number) {
      const api = `https://www.giantbomb.com/api/reviews/?api_key=0e5c263be7a96b8df205c354017ca71730b176c5&format=json&field_list=${score}`
      return this.http.get(api);
    }

    getRegion() {
      const api = 'https://www.giantbomb.com/api/regions/?api_key=0e5c263be7a96b8df205c354017ca71730b176c5&format=json&field_list=name'
      return this.http.get(api);
    }
}