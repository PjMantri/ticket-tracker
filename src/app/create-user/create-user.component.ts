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
  createUserService: CreateUserService;
  user: User;

  constructor(fb: FormBuilder, private http1: Http, private createUserService1: CreateUserService) {
    this.myForm = fb.group({
      'name': [''],
      'email': [''],
      'type': ['']
    });
    this.name = this.myForm.controls['name'];
    this.email = this.myForm.controls['email'];
    this.type = this.myForm.controls['type'];
    this.createUserService = createUserService1;
    this.user=new User();
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);

    console.log('you submitted value of name: ', this.name.value);

      this. user.name = this.name.value;
     this.user.email = this.email.value;
      this.user.type = this.type.value;
    this.createUserService.makePost(this.user);
  }

  //todo remove this from here
  // makeRequest(): void {
  //   this.http.request('http://localhost:8080/user/3')
  //     .subscribe((res: Response) => {
  //       this.data = res.json();
  //     });
  // }


}
