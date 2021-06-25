import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from '../model/appstate';
import { User } from '../model/user';
import * as BookstorePageActions from './bookstore.actions';

export const initialBookstoreState: AppState = {
    selectedUser: {} as User,
    allBooks: [],
};

const bookstoreReducer = createReducer(
    initialBookstoreState,
    on(BookstorePageActions.setUser, (state, { appstate }) => ({ selectedUser: appstate.selectedUser, allBooks: appstate.allBooks })),
    on(BookstorePageActions.addBooks, (state, { appstate }) => ({ selectedUser: appstate.selectedUser, allBooks: appstate.allBooks }))
);

export function reducer(state: AppState | undefined, action: Action) {
    return bookstoreReducer(state, action);
}

export const bookstoreFeatureKey = 'bookstore';