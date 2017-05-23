import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  myForm: FormGroup;
  name: AbstractControl;
  email: AbstractControl;
  type: AbstractControl;

  data: Object;
  http: Http;

  constructor(fb: FormBuilder, private http1: Http) {
    this.myForm = fb.group({
      'name': [''],
      'email': [''],
      'type': ['']
    });
    this.name = this.myForm.controls['name'];
    this.email = this.myForm.controls['email'];
    this.type = this.myForm.controls['type'];

    this.http = http1;
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    this.makeRequest();
    console.log(this.data);
  }

//todo remove this from here
  makeRequest(): void {
    this.http.request('http://localhost:8080/user/3')
      .subscribe((res: Response) => {
        this.data = res.json();
      });
  }


}
