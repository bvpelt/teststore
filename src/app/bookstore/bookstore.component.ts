import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '../model/appstate';
import { Book } from '../model/book';
import { User } from '../model/user';
import { BookService } from '../services/book.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit {
  appstate$: Observable<AppState>;
  users: User[] = [];
  books: Book[] = [];
  selectedUser: User = {} as User;
  selectedBook: Book = {} as Book;
  booklist: FormControl;

  constructor(private userService: UserService,
    private bookService: BookService,
    private messageService: MessageService,
    private store: Store<{ appstate: AppState }>) {
    this.appstate$ = store.pipe(select('appstate'));
    this.booklist = new FormControl();
  }

  ngOnInit(): void {
    this.getUsers();
    this.getBooks();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }
}
