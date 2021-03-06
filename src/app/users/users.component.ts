import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/users/users.service";
import { User } from "app/user/user.module";

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
