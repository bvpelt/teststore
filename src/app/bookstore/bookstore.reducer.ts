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
    on(BookstorePageActions.setUser, (state, { user }) => ({ ...state, selectedUser: user, allBooks: [] })),
    on(BookstorePageActions.addBooks, (state, { book }) => ({ ...state, allbooks: state.allBooks.push(book) }))
);

export function reducer(state: AppState | undefined, action: Action) {
    return bookstoreReducer(state, action);
}

export const bookstoreFeatureKey = 'bookstore';