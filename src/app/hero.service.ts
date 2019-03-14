import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {forkJoin, Observable, of} from 'rxjs';
import {catchError, filter, flatMap, map, mergeMap, tap, toArray} from 'rxjs/operators';

import { Hero, MatchUp } from './hero';



@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'https://api.opendota.com/api/heroes/';  // URL to web api
  private apiKey = '?api_key=67a592dc-4f72-48f6-b9f5-b4749e4b8ef2';
  heroes: Hero[];
  constructor(private http: HttpClient) {  }

  loadHeroes() {
    this.http.get<Hero[]>(`${this.heroesUrl + this.apiKey}`).subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  getHeroNameSync(id: number): string {
    return this.heroes.find(hero => hero.id === id).name;
  }

  /**
   * Retrieves static heroes from heroservice
   */
  getHeroesSync() {
    return this.heroes;
  }


  /**
   *  GET heroes whose name contains search term
   *  @param term - string to search with
   */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl + this.apiKey}`).
      pipe(map(data => data.filter(hero => hero.localized_name.toLowerCase().includes(term.toLowerCase()))),
    /*
      tap(_ => this.log(`found heroes matching "${term}"`)),*/
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
  /**
   * GET all heroes
   */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl + this.apiKey);
  }

  /**
   * GET hero based on id with match up data
   * @param id - id on hero to retrieve
   * @return Observable, the hero
   */
  getHeroWithMatchUpsFromAPI(id: number): Observable<any[]> {

    return forkJoin([this.http.get<Hero[]>(`${this.heroesUrl + this.apiKey}`).pipe(
      map
      (obs => obs.filter(hero => hero.id === id)[0])),
      this.http.get<MatchUp[]>(this.heroesUrl + id + '/matchups' + this.apiKey).pipe(
        map(data => data.filter(a => +a.games_played > 10)),
        map(results => results.sort((a, b) => {
          if (+a.wins / +a.games_played > +b.wins / +b.games_played) {
            return -1;
          } else if (+a.wins / +a.games_played < +b.wins / +b.games_played) {
            return 1;
          } else {
            return 0;
          }
        })),
        map(data => data.slice(0, 7)))]);
  }

  getHeroFromAPI(id: number): Observable<Hero[]> {
    return this.http.get<Hero>(`${this.heroesUrl + this.apiKey}`).pipe(map(hero => hero. === id)[0]);
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

