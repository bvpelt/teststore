import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../model/appstate';
import { Book } from '../model/book';
import { User } from '../model/user';
import { BookService } from '../services/book.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';
import { setUser, addBooks } from './bookstore.actions';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit {
  appstate$: Observable<AppState>;
  users: User[] = [];
  books: Book[] = [];
  selectedBooks: Book[] = [];
  selectedUser: User = {} as User;
  selectedBook: Book = {} as Book;
  currentSelectedUser: number = 0;

  constructor(private userService: UserService,
    private bookService: BookService,
    private messageService: MessageService,
    private store: Store<{ appstate: AppState }>) {
    this.appstate$ = store.pipe(select('appstate'));
    this.messageService.add("Bookstore constructor - appstate");
  }

  ngOnInit(): void {
    this.getUsers();
    this.getBooks();

    this.appstate$.subscribe((appstate: AppState) => {
      this.selectedUser = appstate.selectedUser;
      this.selectedBooks = appstate.allBooks;
    })
    this.log("Bookstore ngoninit - selected user: " + JSON.stringify(this.selectedUser) + " selected books: " + JSON.stringify(this.selectedBooks));
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  mySelectUserHandler($event: number): void {
    this.log("Selected  event: " + JSON.stringify($event));
    this.currentSelectedUser = $event;

    var user: User | undefined;
    user = this.users.find(u => u.id == $event);
    this.log("Set state in store for user: " + JSON.stringify(user));
    this.setSelectedUser(user);
  }

  selectBook(index: number): void {
    this.messageService.add("Select book: [" + index + "] id: " + this.books[index].id + " - " + this.books[index].name);

    if (this.selectedBooks.indexOf(this.books[index]) === -1) {
      this.store.dispatch(addBooks({ book: this.books[index] }));
      this.log('Add book: [' + index + "] id: " + this.books[index].id + " - " + this.books[index].name);
    }
  }

  setSelectedUser(user: User | undefined): void {
    if (user !== undefined) {
      this.store.dispatch(setUser({ user: this.selectedUser }));
      this.log('Set user');
    } else {
      this.log('User undefined');
    }
  }


  /** Log a Scoreboard message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Bookstore: ${message}`);
  }

}
