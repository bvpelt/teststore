import { Book } from "./book";
import { User } from "./user";

export interface AppState {
    selectedUser: User;
    allBooks: Book[];
}