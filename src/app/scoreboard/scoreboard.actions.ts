import { Game } from '../model/game';
import { createAction, props } from '@ngrx/store';


export const homeScore = createAction('[Scoreboard Page] Home Score');
export const guestScore = createAction('[Scoreboard Page] Guest Score');
export const resetScore = createAction('[Scoreboard Page] Score Reset');
export const setScores = createAction('[Scoreboard Page] Set Scores', props<{ game: Game }>());