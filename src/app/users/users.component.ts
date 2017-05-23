import { Component, OnInit, Inject } from '@angular/core';
import { User } from "app/user.module";
import {
  HttpModule,
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';
import { UsersService } from "app/users/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) {
    this.users = usersService.users;
  }

  ngOnInit() {
  }
}
