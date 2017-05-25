
import { User } from "app/user.module";
import { Ticket } from "app/ticket.module";

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

@Injectable()
export class CreateUserTicket {
    http: Http;
    constructor(private http1: Http) {
        this.http = http1;
    }

    makePost(ticket: Ticket): void {
        console.log("Request body " + JSON.stringify({
            status: ticket.status,
            area: ticket.area,
            description: ticket.description,
            customer:ticket.customer,
            createdBy:ticket.createdBy,
            assignedTo:ticket.assignedTo
        }));


        let url = 'http://localhost:8080/ticket/';

        let body = JSON.stringify({
            status: ticket.status,
            area: ticket.area,
            description: ticket.description,
            customer:ticket.customer,
            createdBy:ticket.createdBy,
            assignedTo:ticket.assignedTo
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post(url, body, options).subscribe((res: Response) => {
            console.log("Respose for create ticket " + res);
        });
    }
}