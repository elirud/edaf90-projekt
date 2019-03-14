//import {Matchup} from './matchup';
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
  matchUps: MatchUp[];
}

export class MatchUp {
  hero_id: number;
  games_played: string;
  wins: string;
}
