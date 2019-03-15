  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {HeroService} from '../hero.service';
import {Hero, MatchUp} from '../hero';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: Hero;
  matchUpNames: string[];
  private heroes: Hero[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroesSync()
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroWithMatchUpsFromAPI(id)
      .subscribe(res => {
        (res[0] as any).matchUps = res[1];
        this.hero = res[0];
      });
  }

  goBack(): void {
    this.location.back();
  }
  getHeroName(id: number): string {
    return this.heroes.filter( hero => hero.id === id)[0].localized_name;
  }
  getHeroLinkName(id: number): string {
    return this.heroes.filter( hero => hero.id === id)[0].name;
  }
}
