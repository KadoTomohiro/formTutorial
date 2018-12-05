import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ft-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAll();
  }

}
