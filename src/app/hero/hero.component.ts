import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {HeroService} from '../hero.service';
import {Hero, MatchUp} from '../hero';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
     this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroFromAPI(id)
      .subscribe(res => {
        (res[0] as any).matchUps = res[1];
        this.hero = res[0].filter(hero => hero.id === id );
      });
  }

  goBack(): void {
    this.location.back();
  }
}
