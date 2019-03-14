import {Matchup} from './matchup';
import {$} from 'protractor';
import {HeroService} from './hero.service';



export class Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: [];
  legs: number;

  m

  displayName() {
    console.log(this.name);
  }

  constructor(heroService: HeroService) {}
}
class Matchup {
  hero_id: number,
  games_played: string,
  wins: string
}
