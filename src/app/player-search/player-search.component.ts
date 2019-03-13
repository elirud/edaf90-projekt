import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {filter} from 'rxjs/operators';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: [ './player-search.component.css' ]
})
export class PlayerSearchComponent implements OnInit {
  //players$: Observable<Player>;


  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
  }

  getPlayer(account_id: number){
    this.playerService.getPlayer(account_id);
  }


}