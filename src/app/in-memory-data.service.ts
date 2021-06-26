import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './model/book';
import { Hero } from './model/hero';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const users: User[] = [
      { id: 100, name: 'Jan de Vries' },
      { id: 101, name: 'David Schmits' },
      { id: 102, name: 'Jakob Gollom' },
      { id: 103, name: 'Alex Wenser' },
      { id: 104, name: 'Joost Visser' },
      { id: 105, name: 'Sarah Zollman' },
      { id: 106, name: 'Isabel Wezel' }
    ];

    const books: Book[] = [
      { id: 200, userId: 101, name: 'Duizend en een nacht' },
      { id: 201, userId: 101, name: 'De Pelgrim' },
      { id: 202, userId: 102, name: 'De Hobbit' },
      { id: 203, userId: 104, name: 'Hemelwaarts' },
      { id: 204, userId: 104, name: 'Thinking fast and slow' },
      { id: 205, userId: 106, name: 'De wrekers' },
      { id: 206, userId: 106, name: 'Verwachting' }
    ];
    return { heroes, users, books };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  genUserId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }



}