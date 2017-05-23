
import { User } from "app/user.module";
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
export class CreateUserService {
    http: Http;
    constructor(private http1: Http) {
        this.http = http1;
    }

    makePost(user: User): void {
        console.log("Request body "+  JSON.stringify({
                name: user.name,
                email: user.email,
                type: user.type
            }));


let url = 'http://localhost:8080/user/';

let body = JSON.stringify({
                name: user.name,
                email: user.email,
                type: user.type
            });
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });


 this.http.post(url, body, options) .subscribe((res: Response) => {
     console.log("Respose for create user "+res);
             });
    }
}