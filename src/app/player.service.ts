import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, filter, map, tap, toArray} from 'rxjs/operators';

import {Player} from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerURL = 'https://api.opendota.com/api/players/';
  private apiKey = '?api_key=67a592dc-4f72-48f6-b9f5-b4749e4b8ef2';

  constructor(private http: HttpClient) {

   }
   //GET all players
   //getPlayers(): Observable<Player[]> {
   //  return this.http.get<Player[]>(this.playerURL + this.apiKey);
   //}

   //GET uno player
   getPlayer(account_id: number) : Observable<Player> {
     return this.http.get<Player>(`${this.playerURL + account_id + this.apiKey}`);
   }


}
