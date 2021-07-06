import { AppState } from '../model/appstate';
import { createAction, props } from '@ngrx/store';
import { User } from '../model/user';
import { Book } from '../model/book';

export const setUser = createAction('[Bookstore Page] Set user', props<{ user: User }>());
export const addBooks = createAction('[Bookstore Page] Add books', props<{ book: Book }>());
