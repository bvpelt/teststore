import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { homeScore, guestScore, resetScore } from './scoreboard.actions';
import { Game } from './game';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  game$: Observable<Game>;
  homepoints: number = 0;
  guestpoints: number = 0;

  constructor(private messageService: MessageService, private store: Store<{ game: Game }>) {
    this.game$ = store.pipe(select('game'));
  }

  ngOnInit(): void {
    this.game$.subscribe((game: Game) => {
      this.homepoints = game.home;
      this.guestpoints = game.guest;
    })
  }

  homescore() {
    this.store.dispatch(homeScore());
    this.log('Home score');
  }

  guestscore() {
    this.store.dispatch(guestScore());
    this.log('Guest score');
  }

  resetscore() {
    this.store.dispatch(resetScore());
    this.log('Reset score');
  }

  /** Log a Scoreboard message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Scoreboard: ${message}`);
  }

}
