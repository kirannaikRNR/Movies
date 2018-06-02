import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;

  constructor() {
    this.login = new Login();
  }

  ngOnInit() {

  }

  loginmethod(){

     if(this.login){
      localStorage.setItem('currentUser', JSON.stringify({ email: this.login.email, name: this.login.username }));
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));


      // this.router= Router;
      // this.router.navigate('');
  }


  }

}
