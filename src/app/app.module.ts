import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';

import { counterReducer } from './counter/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

import * as fromScoreboard from './scoreboard/scoreboard.reducer';
import * as fromBookstore from './bookstore/bookstore.reducer';
import { BookstoreComponent } from './bookstore/bookstore.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot({
      count: counterReducer,
      appstate: fromBookstore.reducer,
      game: fromScoreboard.reducer
    }),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    MyCounterComponent,
    ScoreboardComponent,
    BookstoreComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }