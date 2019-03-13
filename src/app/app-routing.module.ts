import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HeroSearchComponent} from './hero-search/hero-search.component';
import { PlayerComponent} from './player/player.component';
import { PlayerSearchComponent} from './player-search/player-search.component';

const routes: Routes = [
  { path: 'herosearch', component: HeroSearchComponent },
  { path: 'playersearch', component: PlayerSearchComponent },
  { path: 'player-detail/:account_id', component: PlayerComponent },
  { path: 'detail/:id', component: HeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
