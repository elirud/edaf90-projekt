import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import {PlayerService} from '../player.service';
import {Player} from '../player';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Player;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer() {
    const id = +this.route.snapshot.paramMap.get('account_id');
    this.playerService.getPlayer(id).subscribe(players => this.player = players);

  }

  goBack(): void {
    this.location.back();
  }
}
