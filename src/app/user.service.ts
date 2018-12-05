import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface IUser {
  name: string;
  address: Address;
  email: string;
  mailingList: boolean;
}

export interface Address {
  zipCode: string;
  prefecture: string;
  otherAddress: string;
}

export class User implements IUser {

  name: string;
  address: Address;
  email: string;
  mailingList: boolean;

  constructor(user: IUser) {
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.mailingList = user.mailingList;
  }


}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly _users: User[];
  private readonly _users$: BehaviorSubject<User[]>;
  constructor() {
    this._users = [];
    this._users$ = new BehaviorSubject(this._users);
  }

  getAll(): Observable<User[]> {
    return this._users$.asObservable();
  }

  addUser(user: IUser): void {
    this._users.push(new User(user));
    this._users$.next(this._users);
  }
}

