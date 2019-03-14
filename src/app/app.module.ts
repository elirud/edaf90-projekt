import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PlayerComponent } from './player/player.component';
import { HeroComponent } from './hero/hero.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { PlayerSearchComponent} from './player-search/player-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlayerComponent,
    HeroComponent,
    PlayerSearchComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
