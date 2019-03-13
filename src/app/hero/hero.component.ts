import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {Matchup} from '../matchup';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: Hero;
  matchups: Matchup[];


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
     this.getHero();
     this.getMatchups();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroes()
      .subscribe(heroes => this.hero = heroes[id - 1]);
  }
  getMatchups(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getMatchups(id).subscribe(matchups => this.matchups = matchups);
  }
  goBack(): void {
    this.location.back();
  }
}
