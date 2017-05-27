import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/users/users.service";
import { TicketsService } from "app/tickets/tickets.service";
import { Ticket } from "app/ticket/ticket.module";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[];

  constructor(private ticketsService: TicketsService) {
    this.tickets = ticketsService.tickets;
  }

  ngOnInit() {
  }
}
