import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from './scoreboard.actions';

export interface State {
    home: number;
    guest: number;
}

export const initialState: State = {
    home: 0,
    guest: 0,
};

const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
    on(ScoreboardPageActions.guestScore, state => ({ ...state, guest: state.guest + 1 })),
    on(ScoreboardPageActions.resetScore, state => ({ home: 0, guest: 0 })),
    on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, guest: game.guest }))
);

export function reducer(state: State | undefined, action: Action) {
    return scoreboardReducer(state, action);
}

export const scoreboardFeatureKey = 'game';