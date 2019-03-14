import { Component, OnInit } from '@angular/core';
import { HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'edaf90-projekt';

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.loadHeroes();
  }
}
