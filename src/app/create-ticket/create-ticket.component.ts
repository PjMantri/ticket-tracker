import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

import { Http, Response } from '@angular/http';
import { CreateUserService } from "app/create-user/create-user.service";
import { User } from "app/user.module";
import { UsersService } from "app/users/users.service";


@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  users: User[];

  myForm: FormGroup;
  status: AbstractControl;
  area: AbstractControl;
  description: AbstractControl;
  customer: AbstractControl;
  createdBy: AbstractControl;
  assignedTo: AbstractControl;

  constructor(fb: FormBuilder, private http1: Http, private usersService: UsersService) {
    this.myForm = fb.group({
      'name': [''],
      'email': [''],
      'type': ['']
    });
    this.status = this.myForm.controls['status'];
    this.area = this.myForm.controls['area'];
    this.description = this.myForm.controls['description'];

    this.customer = this.myForm.controls['customer'];
    this.createdBy = this.myForm.controls['createdBy'];
    this.assignedTo = this.myForm.controls['assignedTo'];

    this.users = usersService.users;
  }


  ngOnInit() {
  }

}
