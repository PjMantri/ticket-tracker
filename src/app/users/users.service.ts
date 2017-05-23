
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
export class UsersService {
    users: User[];

    constructor(private http: Http) {
        this.makeRequest().subscribe(users => {
            this.users = users;
            console.log(users);
        }
        );
    }

    makeRequest(): Observable<User[]> {
        const queryUrl = 'http://localhost:8080/user/';
        return this.http.get(queryUrl)
            .map((res: Response) => res.json().map(obj => new User(obj)));
    }
}