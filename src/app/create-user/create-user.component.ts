import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

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

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'name': [''],
      'email': [''],
      'type': ['']
    });
    this.name = this.myForm.controls['name'];
    this.email = this.myForm.controls['email'];
    this.type = this.myForm.controls['type'];
  }
  ngOnInit() {
  }

  onSubmit(value: string): boolean {
    console.log('you submitted value: ', value);
    return false;
  }


}
