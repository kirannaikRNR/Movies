import { Component, OnInit } from '@angular/core';

import { Registration } from '../model/register.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signin: Registration;

  constructor() {
    this.signin = new Registration();
  }

  ngOnInit() {
  }

  register(){

  }

}
