import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { BookstoreComponent } from './bookstore/bookstore.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'state', component: MyCounterComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'bookstore', component: BookstoreComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }