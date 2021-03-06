import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from "app/ticket/ticket.module";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  constructor() { }

  ngOnInit() {
  }

}
