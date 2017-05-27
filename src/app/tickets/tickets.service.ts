
import {
    HttpModule,
    Http,
    Response,
    RequestOptions,
    Headers
} from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Ticket } from "app/ticket/ticket.module";

@Injectable()
export class TicketsService {
    tickets: Ticket[];

    constructor(private http: Http) {
        this.makeRequest().subscribe(tickets => {
            this.tickets = tickets;
            console.log(tickets);
        }
        );
    }

    makeRequest(): Observable<Ticket[]> {
        const queryUrl = 'http://localhost:8080/ticket/';
        return this.http.get(queryUrl)
            .map((res: Response) => res.json().map(obj => new Ticket(obj)));
    }
}