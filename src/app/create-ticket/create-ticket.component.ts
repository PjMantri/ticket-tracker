import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

import { Http, Response } from '@angular/http';
import { CreateTicketService } from "app/create-ticket/create-ticket.service";
import { User } from "app/user.module";
import { UsersService } from "app/users/users.service";
import { Ticket } from "app/ticket.module";


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

  ticket: Ticket;
  ticketService: CreateTicketService

  constructor(fb: FormBuilder, private http1: Http, private usersService: UsersService, private ticketService1: CreateTicketService) {
    this.myForm = fb.group({
      'status': [''],
      'area': [''],
      'description': [''],
      'customer': [''],
      'createdBy': [''],
      'assignedTo': [''],
    });
    this.status = this.myForm.controls['status'];
    this.area = this.myForm.controls['area'];
    this.description = this.myForm.controls['description'];

    this.customer = this.myForm.controls['customer'];
    this.createdBy = this.myForm.controls['createdBy'];
    this.assignedTo = this.myForm.controls['assignedTo'];

    this.users = usersService.users;
    this.ticketService = ticketService1;
    this.ticket = new Ticket();
  }


  ngOnInit() {
  }


  onSubmit(value: string): void {
    console.log('you submitted value: ', value);

    this.ticket.status = this.status.value;
    this.ticket.area = this.area.value;
    this.ticket.description = this.description.value;
    this.ticket.customer = this.customer.value;
    this.ticket.createdBy = this.createdBy.value;
    this.ticket.assignedTo = this.assignedTo.value;


    this.ticketService.makePost(this.ticket);
  }

}
