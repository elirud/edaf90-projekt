import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PlayerComponent } from './player/player.component';
import { HeroComponent } from './hero/hero.component';
import { MatchComponent } from './match/match.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { PlayerSearchComponent} from './player-search/player-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlayerComponent,
    HeroComponent,
    MatchComponent,
    PlayerSearchComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
