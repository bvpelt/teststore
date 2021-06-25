import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../model/appstate';
import { User } from '../model/user';
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
  selectedUser: User = {} as User;

  constructor(private userService: UserService, private messageService: MessageService, private store: Store<{ appstate: AppState }>) {
    this.appstate$ = store.pipe(select('appstate'));
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
